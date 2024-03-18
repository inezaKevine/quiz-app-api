import { Schema, model } from "mongoose";

const resultSchema = new Schema(
  {
    quiz: {
      type: Schema.Types.ObjectId,
      ref: "Quiz",
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    answers: [
      {
        question: {
          type: Schema.Types.ObjectId,
          ref: "Question",
          required: true,
        },
        selectedOption: {
          optionText: {
            type: String,
            required: true,
          },
          isCorrect: {
            type: Boolean,
            required: true,
          },
        },
      },
    ],
    score: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export default model("Result", resultSchema);
