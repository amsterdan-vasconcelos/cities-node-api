import './shared/services/translationsYup';
import express from 'express';
import { home, cities } from './routes';

const server = express();

server.use(express.json());

server.use(home.router);
server.use(cities.router);

export { server };
