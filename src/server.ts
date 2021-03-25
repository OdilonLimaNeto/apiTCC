import express from 'express';
import { router } from './routes';
import cors from 'cors';
import './database';

const PORT = 3333;
const HOST = '0.0.0.0';

const app = express();

app.use(express.json());
app.use(router);
app.use(cors());


app.listen(PORT, HOST);