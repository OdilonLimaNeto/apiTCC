import express from 'express';
import { router } from './routes';
import cors from 'cors';
import './database';

const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

const app = express();

app.use(express.json());
app.use(router);
app.use(cors());


app.listen(PORT, HOST);