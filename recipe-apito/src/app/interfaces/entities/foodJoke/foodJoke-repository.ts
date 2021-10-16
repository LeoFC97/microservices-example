import FoodJoke from './foodJoke';

export default interface FoodJokeRepository {
  getRandom(): Promise<FoodJoke>;
  create(textJoke: string): Promise<FoodJoke>;
  getById(jokeId: string): Promise<FoodJoke>;
}
