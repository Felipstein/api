import { Router } from 'express';

import { v1Routes } from './v1';

const routes = Router();

routes.get('/v1', v1Routes);

routes.get('/', (req, res) => {
  res.json({ ok: true, message: 'Hello! API Working.' });
});

export { routes };
