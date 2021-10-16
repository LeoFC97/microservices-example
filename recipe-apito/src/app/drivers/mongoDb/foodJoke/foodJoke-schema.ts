import { Schema } from 'mongoose';

const FoodJokeSchema = new Schema(
  {
    joke: {
      type: String,
      required: true,
      index: true,
    },
  },
  {
    timestamps: true,
  },
);

export default FoodJokeSchema;
