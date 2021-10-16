import { injectable } from 'tsyringe';
import Controller from '../../../interfaces/http/controller';
import { HttpResponse, HttpRequest } from '../../../interfaces/http/http';
import CreateFoodJokeUseCase from '../../../use-cases/createFoodJoke';
import { CreateRandomJokeBodyData } from '../../../interfaces/entities/foodJoke/foodJoke';
import CreateFoodJokeValidator from '../../../validators/create-foodJoke';

@injectable()
class GetRandomFoodJokeController implements Controller {
  constructor(
    private createFoodJokeUseCase: CreateFoodJokeUseCase,
    private createFoodJokeValidator: CreateFoodJokeValidator,
  ) {}
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { body } = httpRequest;
    const data = await this.createFoodJokeValidator
      .validate<CreateRandomJokeBodyData>(body);
    const joke = await this.createFoodJokeUseCase.execute(data.joke);
    return {
      body: joke,
      status: 200,
    };
  }
}

export default GetRandomFoodJokeController;
