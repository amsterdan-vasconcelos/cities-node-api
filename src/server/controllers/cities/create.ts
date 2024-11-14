import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';

type Body = { name: string };
type Create = RequestHandler<unknown, unknown, Body>;

export const create: Create = (_req, res) => {
  res.status(StatusCodes.OK).json({ create: true });
};
