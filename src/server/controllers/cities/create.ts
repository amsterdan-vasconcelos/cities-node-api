import * as y from 'yup';
import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';

const bodySchema = y.object().shape({
  name: y.string().required(),
  age: y.number().required(),
});

type Body = y.InferType<typeof bodySchema>;
type Create = RequestHandler<unknown, unknown, Body>;

export const createValidate: RequestHandler = async (req, res, next) => {
  try {
    await bodySchema.validate(req.body, { abortEarly: false });
    next();
  } catch (error) {
    if (error instanceof y.ValidationError) {
      const yupError = error as y.ValidationError;
      const errors: Record<string, string> = {};

      for (const { path, message } of yupError.inner) {
        if (!path) return;
        errors[path] = message;
      }

      res.status(StatusCodes.BAD_REQUEST).json({ errors });
      return;
    }

    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: 'Erro interno.' });
  }
};

export const create: Create = (req, res) => {
  const data = req.body;

  res.status(StatusCodes.OK).json({ data });
};
