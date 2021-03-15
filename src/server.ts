import express from 'express';
import { router } from './routes';
import './database';

const PORT = 3333;
const HOST = '0.0.0.0';

const app = express();

app.use(express.json());
app.use(router);


app.listen(PORT, HOST);