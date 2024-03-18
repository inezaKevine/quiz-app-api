import { Schema, model } from "mongoose";

const questionSchema = new Schema(
  {
    questionText: {
      type: String,
      required: true,
    },
    quiz: {
      type: Schema.Types.ObjectId,
      ref: "Quiz",
      required: true,
    },
    options: [
      {
        optionText: {
          type: String,
          required: true,
        },
        isCorrect: {
          type: Boolean,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

export default model("Question", questionSchema);
