import { server } from './server/server';

const port = 3333;

server.listen(port, () => {
  console.log(`Aplicação rodando em http://localhost:${port}`);
});
