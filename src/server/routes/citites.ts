import { Router } from 'express';
import { citiesController } from '../controllers';

const router = Router();

router.post(
  '/cities',
  citiesController.createValidate,
  citiesController.create,
);

router.get('/cities', citiesController.getAllValidate, citiesController.getAll);

router.get(
  '/cities/:id',
  citiesController.getByIdValidate,
  citiesController.getById,
);

router.put(
  '/cities/:id',
  citiesController.updateByIdValidate,
  citiesController.updateById,
);

router.delete(
  '/cities/:id',
  citiesController.deleteByIdValidate,
  citiesController.deleteById,
);

export { router };
