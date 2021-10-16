import FoodJoke from './foodJoke';

export default interface FoodJokeRepository {
  getRandom(): Promise<FoodJoke>;
}
