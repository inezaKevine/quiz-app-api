import { NotFoundException } from "../exceptions/http-exceptions";
import ResultModel from "../models/result.model";

export class ResultService {
  constructor() {
    this.resultModel = ResultModel;
  }

  async createResult(resultData) {
    try {
      const result = await this.resultModel.create(resultData);
      return result;
    } catch (error) {
      throw error;
    }
  }

  async getResultById(resultId) {
    try {
      const result = await this.resultModel.findById(resultId);
      if (!result) {
        throw new NotFoundException(`Result with ID ${resultId} not found`);
      }
      return result;
    } catch (error) {
      throw error;
    }
  }

  async getAllResultsForQuiz(quizId) {
    try {
      const results = await this.resultModel.find({ quiz: quizId });
      return results;
    } catch (error) {
      throw error;
    }
  }

  async getAllResultsForUser(userId) {
    try {
      const results = await this.resultModel.find({ user: userId });
      return results;
    } catch (error) {
      throw error;
    }
  }

  async updateResult(resultId, updatedData) {
    try {
      const result = await this.getResultById(resultId);
      const updatedResult = await this.resultModel.findByIdAndUpdate(
        result._id,
        updatedData,
        { new: true }
      );
      return updatedResult;
    } catch (error) {
      throw error;
    }
  }

  async deleteResult(resultId) {
    try {
      const result = await this.getResultById(resultId);
      await this.resultModel.findByIdAndDelete(result._id);
    } catch (error) {
      throw error;
    }
  }
}
