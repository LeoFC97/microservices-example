import Joi from 'joi';

const paramFoodJokeIdSchema = Joi.object({
  jokeId: Joi.string()
    .uuid()
    .required()
    .label('jokeId.id'),
}).required();

export default paramFoodJokeIdSchema;
