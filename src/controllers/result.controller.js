import { ResultService } from "../services/result.service";

export class ResultController {
  constructor() {
    this.resultService = new ResultService();
  }

  async createResult(req, res, next) {
    try {
      const result = await this.resultService.createResult(req.body);
      res.status(201).json({
        statusCode: 201,
        message: "Result created successfully",
        payload: result,
      });
    } catch (error) {
      console.error(error);
      next(error);
    }
  }

  async getResult(req, res, next) {
    try {
      const result = await this.resultService.getResultById(req.params.id);
      res.status(200).json({
        statusCode: 200,
        message: "Result retrieved successfully",
        payload: result,
      });
    } catch (error) {
      console.error(error);
      next(error);
    }
  }

  async getAllResultsForQuiz(req, res, next) {
    try {
      const results = await this.resultService.getAllResultsForQuiz(
        req.params.quizId
      );
      res.status(200).json({
        statusCode: 200,
        message: "Results retrieved successfully",
        payload: results,
      });
    } catch (error) {
      console.error(error);
      next(error);
    }
  }

  async getAllResultsForUser(req, res, next) {
    try {
      const results = await this.resultService.getAllResultsForUser(
        req.params.userId
      );
      res.status(200).json({
        statusCode: 200,
        message: "Results retrieved successfully",
        payload: results,
      });
    } catch (error) {
      console.error(error);
      next(error);
    }
  }

  async updateResult(req, res, next) {
    try {
      const result = await this.resultService.updateResult(
        req.params.id,
        req.body
      );
      res.status(200).json({
        statusCode: 200,
        message: "Result updated successfully",
        payload: result,
      });
    } catch (error) {
      console.error(error);
      next(error);
    }
  }

  async deleteResult(req, res, next) {
    try {
      await this.resultService.deleteResult(req.params.id);
      res.status(200).json({
        statusCode: 200,
        message: "Result deleted successfully",
        payload: null,
      });
    } catch (error) {
      console.error(error);
      next(error);
    }
  }
}
