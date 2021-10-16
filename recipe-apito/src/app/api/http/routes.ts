import express from 'express';
import container from '../../container';
import { adapt } from '../../drivers/http/express-router-adapter';

import HealthController from './controllers/health';
import GetRandomFoodJokeController from './controllers/getRandomFoodJoke';
import CreateFoodJokeController from './controllers/createFoodJoke';
import GetFoodJokeById from './controllers/getFoodJokeById';

const router = express.Router();

router.get('/health', adapt(container.resolve(HealthController)));
router.get('/randomJoke', adapt(container.resolve(GetRandomFoodJokeController)));
router.post('/joke', adapt(container.resolve(CreateFoodJokeController)));
router.get('/joke/:jokeId', adapt(container.resolve(GetFoodJokeById)));

export default router;
