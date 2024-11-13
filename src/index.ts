import 'dotenv/config';
import { server } from './server/server';

const port = process.env.PORT || 3333;

server.listen(port, () => {
  console.log(`Aplicação rodando em http://localhost:${port}`);
});
