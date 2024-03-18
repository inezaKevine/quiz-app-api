import {
  NotFoundException,
  ConflictException,
} from "../exceptions/http-exceptions";
import QuestionModel from "../models/question.model";
import { QuizService } from "./quiz.service";

export class QuestionService {
  constructor() {
    this.questionModel = QuestionModel;
    this.quizService = new QuizService();
  }

  async createQuestion(questionData) {
    try {
      await this.quizService.getQuizById(questionData.quiz);
      const question = await this.questionModel.create(questionData);
      return question;
    } catch (error) {
      throw error;
    }
  }

  async getQuestionById(questionId) {
    try {
      const question = await this.questionModel.findById(questionId);
      if (!question) {
        throw new NotFoundException(`Question with ID ${questionId} not found`);
      }
      return question;
    } catch (error) {
      throw error;
    }
  }

  async getAllQuestionsForQuiz(quizId) {
    try {
      const questions = await this.questionModel.find({ quiz: quizId });
      return questions;
    } catch (error) {
      throw error;
    }
  }

  async updateQuestion(questionId, updatedData) {
    try {
      const question = await this.getQuestionById(questionId);
      const updatedQuestion = await this.questionModel.findByIdAndUpdate(
        question._id,
        updatedData,
        { new: true }
      );
      return updatedQuestion;
    } catch (error) {
      throw error;
    }
  }

  async deleteQuestion(questionId) {
    try {
      const question = await this.getQuestionById(questionId);
      await this.questionModel.findByIdAndDelete(question._id);
    } catch (error) {
      throw error;
    }
  }
}
