import { inject, injectable } from 'tsyringe';
import FoodJoke from '../interfaces/entities/foodJoke/foodJoke';
import UseCase from '../interfaces/use-case';
import FoodJokeRepository from '../interfaces/entities/foodJoke/foodJoke-repository';

@injectable()
class GetFoodJokeByIdUseCase implements UseCase {
  constructor(
    @inject('FoodJokeRepository') private foodJokeRepository: FoodJokeRepository,
  ) {}

  async execute(foodJokeId: string): Promise<FoodJoke> {
    const joke = await this.foodJokeRepository.getById(foodJokeId);
    return joke;
  }
}
export default GetFoodJokeByIdUseCase;
