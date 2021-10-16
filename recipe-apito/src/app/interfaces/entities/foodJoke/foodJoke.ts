import { ObjectId } from 'mongodb';

export default interface FoodJoke {
  _id: ObjectId,
  joke: string,
  createdAt: Date,
  updatedAt: Date
}

export interface CreateRandomJokeBodyData {
  joke: string,
}
