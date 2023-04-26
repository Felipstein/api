import express from 'express';
import cors from 'cors';
import 'express-async-errors';
import 'dotenv';

import { errorHandler } from './middlewares/error-handler.middleware';
import { routes } from './routes';

const app = express();

app.use(cors());
app.use(routes);
app.use(errorHandler);

export { app };
