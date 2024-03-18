import express from "express";
import { ResultController } from "../controllers/result.controller";

const router = express.Router();
const resultController = new ResultController();

router.post("/", resultController.createResult.bind(resultController));

router.get("/:id", resultController.getResult.bind(resultController));

router.get(
  "/quiz/:quizId",
  resultController.getAllResultsForQuiz.bind(resultController)
);

router.get(
  "/user/:userId",
  resultController.getAllResultsForUser.bind(resultController)
);

router.patch("/:id", resultController.updateResult.bind(resultController));

router.delete("/:id", resultController.deleteResult.bind(resultController));

export default router;
