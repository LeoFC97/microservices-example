import { injectable } from 'tsyringe';
import Controller from '../../../interfaces/http/controller';
import { HttpResponse } from '../../../interfaces/http/http';
import GetFoodJokeUseCase from '../../../use-cases/getFoodJoke';

@injectable()
class GetRandomFoodJokeController implements Controller {
  constructor(
    private getFoodJokeUseCase: GetFoodJokeUseCase,
  ) {}
  async handle(): Promise<HttpResponse> {
    const joke = await this.getFoodJokeUseCase.execute();
    return {
      body: joke,
      status: 200,
    };
  }
}

export default GetRandomFoodJokeController;
