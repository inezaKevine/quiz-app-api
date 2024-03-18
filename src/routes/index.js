import express from "express";
import status from "http-status";
import authRoutes from "./auth.route";
import quizRoutes from "./quiz.routes";
import questionsRoutes from "./questions.routes";
import resultsRoutes from "./results.routes";
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(status.OK).json({
    statusCode: 200,
    message: "Welcome to QUIZ API",
    payload: null,
  });
});

router.use("/auth", authRoutes);
router.use("/quiz", quizRoutes);
router.use("/questions", questionsRoutes);
router.use("/results", resultsRoutes);

export default router;
