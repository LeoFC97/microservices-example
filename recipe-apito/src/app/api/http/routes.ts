import express from 'express';
import container from '../../container';
import { adapt } from '../../drivers/http/express-router-adapter';

import HealthController from './controllers/health';
import FoodJokeController from './controllers/getRandomFoodJoke';

const router = express.Router();

router.get('/health', adapt(container.resolve(HealthController)));
router.get('/randomJoke', adapt(container.resolve(FoodJokeController)));

export default router;
