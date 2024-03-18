import express from "express";
import { QuestionController } from "../controllers/question.controller";

const router = express.Router();

const questionController = new QuestionController();

router.post("/", questionController.createQuestion.bind(questionController));

router.get(
  "/",
  questionController.getAllQuestionsForQuiz.bind(questionController)
);

router.get("/:id", questionController.getQuestion.bind(questionController));

router.patch(
  "/:id",
  questionController.updateQuestion.bind(questionController)
);

router.delete(
  "/:id",
  questionController.deleteQuestion.bind(questionController)
);
export default router;
