import Joi from 'joi';

const createFoodJokechema = Joi.object({
  joke: Joi.string().label('joke').required(),
}).required();

export default createFoodJokechema;
