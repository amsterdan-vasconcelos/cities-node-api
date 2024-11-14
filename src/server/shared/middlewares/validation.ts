import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';
import { Schema, ValidationError } from 'yup';

type Property = 'body' | 'query' | 'header' | 'params';

type AllSchemas = Record<Property, Schema<unknown>>;

type Validation = (AllSchemas: Partial<AllSchemas>) => RequestHandler;

const validation: Validation = (AllSchemas) => async (req, res, next) => {
  const errosResult: Record<string, Record<string, string>> = {};

  for (const [key, schema] of Object.entries(AllSchemas)) {
    try {
      await schema.validate(req[key as Property], { abortEarly: false });
    } catch (error) {
      const isValidationError = error instanceof ValidationError;
      if (!isValidationError) {
        res.status(StatusCodes.BAD_REQUEST).json({ error: 'Erro interno.' });
        return;
      }

      const errors: Record<string, string> = {};

      for (const { path, message } of error.inner) {
        if (!path) return;
        errors[path] = message;
      }

      errosResult[key] = errors;
    }
  }

  const hasErrors = Object.entries(errosResult).length > 0;

  if (hasErrors) {
    res.status(StatusCodes.BAD_REQUEST).json({ errors: errosResult });
    return;
  }

  next();
};

export { validation };
