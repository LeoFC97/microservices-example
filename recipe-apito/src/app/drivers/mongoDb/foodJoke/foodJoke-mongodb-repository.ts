import {
  Document,
  Model,
  model,
} from 'mongoose';
import EntityNotFoundError from '../../../errors/entity-not-found';
import FoodJokeRepository from '../../../interfaces/entities/foodJoke/foodJoke-repository';
import FoodJokeSchema from './foodJoke-schema';
import FoodJoke from '../../../interfaces/entities/foodJoke/foodJoke';

type FoodJokeDoc = FoodJoke & Document;
class FoodJokeMongoDBRepository implements FoodJokeRepository {
  private model: Model<FoodJokeDoc>;

  constructor() {
    this.model = model<FoodJokeDoc>('FoodJoke', FoodJokeSchema);
  }
  async create(textJoke: string): Promise<FoodJoke> {
    console.log(textJoke);
    const joke = await this.model.create({ joke: textJoke });
    if (joke) {
      return joke;
    }
    throw new EntityNotFoundError('No joke was found'); // pensar em um erro melhor
  }
  async getRandom(): Promise<FoodJoke> {
    const joke = await this.model.findOne().limit(1);
    if (joke) {
      return joke;
    }
    throw new EntityNotFoundError('No joke was found');
  }
  async getById(jokeId: string): Promise<FoodJoke> {
    console.log(jokeId);
    const store = await this.model.findOne({ _id: jokeId });
    return store as FoodJoke;
  }
}

export default FoodJokeMongoDBRepository;
