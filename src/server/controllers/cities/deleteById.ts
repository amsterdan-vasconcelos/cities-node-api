import * as y from 'yup';
import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';
import { validation } from '../../shared/middlewares/validation';
import { citiesSchemas } from '../../shared/schemas';

const { paramsSchema } = citiesSchemas.deleteById;

export const deleteByIdValidate = validation({ params: paramsSchema });

type Params = y.InferType<typeof paramsSchema>;
type DeleteById = RequestHandler<Params>;

export const deleteById: DeleteById = (req, res) => {
  const id = Number(req.params.id);

  res.status(StatusCodes.OK).json({ id });
};
