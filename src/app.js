import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import http from "http";
import logger from "morgan";
import path from "path";
import swaggerUI from "swagger-ui-express";
import connect from "./config/db.config";
import "./config/jwt.config";
import docs from "./docs";
import indexRouter from "./routes/index";
import { HttpException, NotFoundException } from "./exceptions/http-exceptions";
import User from "./models/user.model";
import EncryptionUtil from "./utils/helpers/encryption.util";

const app = express();
connect(app);
const port = normalizePort(process.env.PORT || "3000");

app.use(cors());
app.set("port", port);
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/v1", indexRouter);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(docs));

// Catch all 404 errors
app.all("*", (req, res, next) => {
  const err = new NotFoundException();
  next(err);
});

// Error handling middleware
app.use((err, req, res, next) => {
  if (err instanceof HttpException) {
    res.status(err.status).send({
      statusCode: err.status,
      message: err.message,
      path: req.path,
    });
  } else {
    res.status(500).send({
      statusCode: 500,
      message: "Internal Server Error",
      path: req.path,
    });
  }
});

const server = http.createServer(app);
server.listen(port);
server.on("error", onError);
server.on("listening", onListening);

function normalizePort(val) {
  const port = parseInt(val, 10);
  if (isNaN(port)) return val;
  if (port >= 0) return port;
  return false;
}

function onError(error) {
  if (error.syscall !== "listen") throw error;
  const bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

async function onListening() {
  try {
    const addr = server.address();
    const bind =
      typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
    console.log("Listening on " + bind);

    // Check if an admin user already exists
    const existingAdmin = await User.findOne({ role: "admin" });
    if (existingAdmin) {
      console.log("Admin user already exists");
    } else {
      const encryptionUtil = new EncryptionUtil();
      await User.create({
        username: "admin",
        email: "admin@example.com",
        password: await encryptionUtil.hashPlainText("password"),
        role: "admin",
      });
      console.log("Admin user created successfully");
    }
  } catch (err) {
    console.error("Error:", err);
  }
}
