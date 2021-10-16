import BaseSchemaValidator from './base-schema-validator';
import createFoodJokeSchema from './schemas/create-foodJoke';

class CreateFoodJokeValidator extends BaseSchemaValidator {
  constructor(
    schema = createFoodJokeSchema,
  ) {
    super(schema);
  }
}

export default CreateFoodJokeValidator;
