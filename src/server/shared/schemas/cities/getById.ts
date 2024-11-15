import * as y from 'yup';

export const paramsSchema = y.object().shape({
  id: y.number().integer().moreThan(0).optional(),
});
