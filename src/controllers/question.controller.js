import { QuestionService } from "../services/question.service";

export class QuestionController {
  constructor() {
    this.questionService = new QuestionService();
  }

  async createQuestion(req, res, next) {
    try {
      const question = await this.questionService.createQuestion(req.body);
      res.status(201).json({
        statusCode: 201,
        message: "Question created successfully",
        payload: question,
      });
    } catch (error) {
      console.error(error);
      next(error);
    }
  }

  async getQuestion(req, res, next) {
    try {
      const question = await this.questionService.getQuestionById(
        req.params.id
      );
      res.status(200).json({
        statusCode: 200,
        message: "Question retrieved successfully",
        payload: question,
      });
    } catch (error) {
      console.error(error);
      next(error);
    }
  }

  async getAllQuestionsForQuiz(req, res, next) {
    try {
      const { quiz } = req.query;
      const questions = await this.questionService.getAllQuestionsForQuiz(quiz);
      res.status(200).json({
        statusCode: 200,
        message: "Questions retrieved successfully",
        payload: questions,
      });
    } catch (error) {
      console.error(error);
      next(error);
    }
  }

  async updateQuestion(req, res, next) {
    try {
      const question = await this.questionService.updateQuestion(
        req.params.id,
        req.body
      );
      res.status(200).json({
        statusCode: 200,
        message: "Question updated successfully",
        payload: question,
      });
    } catch (error) {
      console.error(error);
      next(error);
    }
  }

  async deleteQuestion(req, res, next) {
    try {
      await this.questionService.deleteQuestion(req.params.id);
      res.status(200).json({
        statusCode: 200,
        message: "Question deleted successfully",
        payload: null,
      });
    } catch (error) {
      console.error(error);
      next(error);
    }
  }
}
