import { QuizService } from "../services/quiz.service";

export class QuizController {
  constructor() {
    this.quizService = new QuizService();
  }

  async createQuiz(req, res, next) {
    try {
      const quiz = await this.quizService.createQuiz(req.body);
      res.status(201).json({
        statusCode: 201,
        message: "Quiz created successfully",
        payload: quiz,
      });
    } catch (error) {
      console.error(error);
      next(error);
    }
  }

  async getQuiz(req, res, next) {
    try {
      const quiz = await this.quizService.getQuizById(req.params.id);
      res.status(200).json({
        statusCode: 200,
        message: "Quiz retrieved successfully",
        payload: quiz,
      });
    } catch (error) {
      console.error(error);
      next(error);
    }
  }

  async getAllQuizzes(req, res, next) {
    try {
      const { searchString } = req.query;
      const quizzes = await this.quizService.getAllQuizzes(searchString);
      res.status(200).json({
        statusCode: 200,
        message: "Quizzes retrieved successfully",
        payload: quizzes,
      });
    } catch (error) {
      console.error(error);
      next(error);
    }
  }

  async updateQuiz(req, res, next) {
    try {
      const quiz = await this.quizService.updateQuiz(req.params.id, req.body);
      res.status(200).json({
        statusCode: 200,
        message: "Quiz updated successfully",
        payload: quiz,
      });
    } catch (error) {
      console.error(error);
      next(error);
    }
  }

  async deleteQuiz(req, res, next) {
    try {
      await this.quizService.deleteQuiz(req.params.id);
      res.status(200).json({
        statusCode: 200,
        message: "Quiz deleted successfully",
        payload: null,
      });
    } catch (error) {
      console.error(error);
      next(error);
    }
  }
}
