import * as y from 'yup';

export const bodySchema = y.object().shape({
  name: y.string().required(),
});
