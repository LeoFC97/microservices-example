import BaseSchemaValidator from './base-schema-validator';
import FoodJokeIdJoiSchema from './schemas/param-foodJoke-id';

class ParamFoodJokeIdValidator extends BaseSchemaValidator {
  constructor(
    schema = FoodJokeIdJoiSchema,
  ) {
    super(schema);
  }
}

export default ParamFoodJokeIdValidator;
