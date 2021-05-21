import { Router } from 'express';

import mylimsRouter from '@modules/samples/infra/http/routes/mylims.routes';

const routes = Router();

routes.use('/mylims', mylimsRouter);

export default routes;
