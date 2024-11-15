import * as y from 'yup';

export const querySchema = y.object().shape({
  page: y.number().moreThan(0).optional(),
  limit: y.number().moreThan(0).optional(),
  search: y.string().optional(),
});
