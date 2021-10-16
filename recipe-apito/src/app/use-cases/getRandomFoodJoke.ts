import { inject, injectable } from 'tsyringe';
import FoodJoke from '../interfaces/entities/foodJoke/foodJoke';
import UseCase from '../interfaces/use-case';
import FoodJokeRepository from '../interfaces/entities/foodJoke/foodJoke-repository';

@injectable()
class GetRandomFoodJokeUseCase implements UseCase {
  constructor(
    @inject('FoodJokeRepository') private foodJokeRepository: FoodJokeRepository,
  ) {}

  async execute(): Promise<FoodJoke> {
    const joke = await this.foodJokeRepository.getRandom();
    return joke;
  }
}
export default GetRandomFoodJokeUseCase;
