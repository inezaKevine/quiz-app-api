import { Schema, model } from "mongoose";

const quizSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    instructions: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default model("Quiz", quizSchema);
