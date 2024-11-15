import * as y from 'yup';
import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';
import { validation } from '../../shared/middlewares/validation';
import { citiesSchemas } from '../../shared/schemas';

const { bodySchema, paramsSchema } = citiesSchemas.updateById;

export const updateByIdValidate = validation({
  body: bodySchema,
  params: paramsSchema,
});

type Body = y.InferType<typeof bodySchema>;
type Params = y.InferType<typeof paramsSchema>;
type UpdateById = RequestHandler<Params, unknown, Body>;

export const updateById: UpdateById = (req, res) => {
  const { name } = req.body;
  const id = Number(req.params.id);

  res.status(StatusCodes.OK).json({ data: { name, id } });
};
