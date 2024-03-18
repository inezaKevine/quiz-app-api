import express from "express";
import { QuizController } from "../controllers/quiz.controller";

const router = express.Router();

const quizController = new QuizController();

router.post("/", quizController.createQuiz.bind(quizController));

router.get("/", quizController.getAllQuizzes.bind(quizController));

router.get("/:id", quizController.getQuiz.bind(quizController));

router.patch("/:id", quizController.updateQuiz.bind(quizController));

router.delete("/:id", quizController.deleteQuiz.bind(quizController));
export default router;
