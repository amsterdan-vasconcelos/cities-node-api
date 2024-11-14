import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

const router = Router();

router.get('/', (_req, res) => {
  res.status(StatusCodes.OK).json({ success: true });
});

export { router };
