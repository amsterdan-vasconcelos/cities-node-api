import { Router } from 'express';
import { citiesController } from '../controllers';

const router = Router();

router.post(
  '/cities',
  citiesController.createValidate,
  citiesController.create,
);

export { router };
