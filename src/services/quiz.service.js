import {
  NotFoundException,
  ConflictException,
} from "../exceptions/http-exceptions";
import QuizModel from "../models/quiz.model";

export class QuizService {
  constructor() {
    this.quizModel = QuizModel;
  }

  async createQuiz(quizData) {
    try {
      const quiz = await this.quizModel.create(quizData);
      return quiz;
    } catch (error) {
      throw error;
    }
  }

  async getQuizById(quizId) {
    try {
      const quiz = await this.quizModel.findOne({ _id: quizId });
      if (!quiz) {
        throw new NotFoundException(`Quiz with ID ${quizId} not found`);
      }
      return quiz;
    } catch (error) {
      throw error;
    }
  }

  async getAllQuizzes(searchString) {
    try {
      let query = {};
      if (searchString) {
        query = { title: { $regex: searchString, $options: "i" } };
      }
      const quizzes = await this.quizModel.find(query);
      return quizzes;
    } catch (error) {
      throw error;
    }
  }

  async updateQuiz(quizId, updatedData) {
    try {
      const quiz = await this.getQuizById(quizId);
      const updatedQuiz = await this.quizModel.findByIdAndUpdate(
        quiz._id,
        updatedData,
        {
          new: true,
        }
      );
      return updatedQuiz;
    } catch (error) {
      throw error;
    }
  }

  async deleteQuiz(quizId) {
    try {
      const quiz = await this.getQuizById(quizId);
      await this.quizModel.findByIdAndDelete(quiz._id);
    } catch (error) {
      throw error;
    }
  }
}
