import routes from './routes';

describe('Check if all endpoints are declarated', () => {
  test('Should exist path /health', async () => {
    const pathToBeTested = '/health';
    const healthEnpoint = routes.stack.find((endpoint) => endpoint.route.path === pathToBeTested);
    expect(healthEnpoint).toBeDefined();
  });
  test('Should exists method GET on /health', async () => {
    const pathToBeTested = '/health';
    const healthMethod = routes.stack.some((endpoint) => endpoint.route.path === pathToBeTested
      && endpoint.route.methods.get);
    expect(healthMethod).toBeTruthy();
  });
  test('Should exist path /randomJoke', async () => {
    const pathToBeTested = '/randomJoke';
    const healthEnpoint = routes.stack.find((endpoint) => endpoint.route.path === pathToBeTested);
    expect(healthEnpoint).toBeDefined();
  });
  test('Should exists method GET on /randomJoke', async () => {
    const pathToBeTested = '/randomJoke';
    const healthMethod = routes.stack.some((endpoint) => endpoint.route.path === pathToBeTested
      && endpoint.route.methods.get);
    expect(healthMethod).toBeTruthy();
  });
});
