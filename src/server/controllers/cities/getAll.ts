import * as y from 'yup';
import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';
import { validation } from '../../shared/middlewares/validation';
import { citiesSchemas } from '../../shared/schemas';

const { querySchema } = citiesSchemas.getAll;

export const getAllValidate = validation({ query: querySchema });

type Query = y.InferType<typeof querySchema>;
type GetAll = RequestHandler<unknown, unknown, unknown, Query>;

export const getAll: GetAll = (req, res) => {
  const data = req.query;
  const page = data.page && Number(data.page);
  const limit = data.limit && Number(data.limit);

  res.status(StatusCodes.OK).json({ data: { ...data, page, limit } });
};
