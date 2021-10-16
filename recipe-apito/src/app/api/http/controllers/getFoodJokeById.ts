import { injectable } from 'tsyringe';
import Controller from '../../../interfaces/http/controller';
import { HttpRequest, HttpResponse } from '../../../interfaces/http/http';
import GetFoodJokeByIdUseCase from '../../../use-cases/getFoodJokeById';
import ParamFoodJokeIdValidator from '../../../validators/param-foodJoke-id';
import { ParamFoodJokeId } from '../../../interfaces/use-cases/foodJoke';

@injectable()
class GetFoodJokeByIdController implements Controller {
  constructor(
    private getFoodJokeByIdUseCase: GetFoodJokeByIdUseCase,
    private paramFoodJokeIdValidator: ParamFoodJokeIdValidator,
  ) {}
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { params } = httpRequest;
    console.log(params);
    const paramFoodJokeId = await this.paramFoodJokeIdValidator
      .validate<ParamFoodJokeId>(params);
    const joke = await this.getFoodJokeByIdUseCase.execute(paramFoodJokeId.jokeId);
    return {
      body: joke,
      status: 200,
    };
  }
}

export default GetFoodJokeByIdController;
