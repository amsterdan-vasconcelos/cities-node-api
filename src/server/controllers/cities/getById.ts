import * as y from 'yup';
import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';
import { validation } from '../../shared/middlewares/validation';
import { citiesSchemas } from '../../shared/schemas';

const { paramsSchema } = citiesSchemas.getById;

export const getByIdValidate = validation({ params: paramsSchema });

type Params = y.InferType<typeof paramsSchema>;
type GetById = RequestHandler<Params>;

export const getById: GetById = (req, res) => {
  const data = req.params;
  const id = Number(data.id);

  res.status(StatusCodes.OK).json({ id });
};
