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
  async getRandom(): Promise<FoodJoke> {
    const joke = await this.model.findOne().limit(1);
    if (joke) {
      return joke;
    }

    throw new EntityNotFoundError('No joke was found');
  }
}

export default FoodJokeMongoDBRepository;
