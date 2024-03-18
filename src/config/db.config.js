import mongoose from "mongoose";
import dotenv from "dotenv";
import { MongoMemoryServer } from "mongodb-memory-server";

dotenv.config();

const connect = (app) => {
  const options = {
    autoIndex: false,
    maxPoolSize: 10,
  };

  const connectWithRetry = async () => {
    mongoose.Promise = global.Promise;
    try {
      let uri = process.env.MONGODB_URI;
      if (process.env.NODE_ENV === "test") {
        const mongoServer = new MongoMemoryServer();
        uri = await mongoServer.getUri();
      }
      await mongoose.connect(uri, options);
      console.log("Database is connected");
      app.emit("ready");
    } catch (err) {
      console.log(
        "MongoDB connection unsuccessful, retry after 2 seconds.",
        err
      );
      setTimeout(connectWithRetry, 2000);
    }
  };

  connectWithRetry();
};

export default connect;
