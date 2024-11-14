import * as y from 'yup';
import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';
import { validation } from '../../shared/middlewares/validation';
import { citiesSchemas } from '../../shared/schemas';

const { bodySchema } = citiesSchemas.create;

export const createValidate = validation({ body: bodySchema });

type Body = y.InferType<typeof bodySchema>;
type Create = RequestHandler<unknown, unknown, Body>;

export const create: Create = (req, res) => {
  const data = req.body;

  res.status(StatusCodes.OK).json({ data });
};
