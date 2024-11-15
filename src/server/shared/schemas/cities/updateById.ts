import * as y from 'yup';

export const bodySchema = y.object().shape({
  name: y.string().required(),
});

export const paramsSchema = y.object().shape({
  id: y.number().integer().moreThan(0).optional(),
});
