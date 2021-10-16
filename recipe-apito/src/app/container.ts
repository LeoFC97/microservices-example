import { container } from 'tsyringe';

import FoodJokeDBRepository from './drivers/mongoDb/foodJoke/foodJoke-mongodb-repository';

container.register('FoodJokeRepository', {
  useClass: FoodJokeDBRepository,
});

export default container;
