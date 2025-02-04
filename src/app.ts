import express, { Request, Response } from 'express';
import cors from 'cors';
import router from './routes';
import globalErrorHandler from './middlewares/globalErrorHandler';
import notFound from './middlewares/notFound';
const app = express();

app.use(express.json());
app.use(cors({ origin: '*' }));

app.use('/api', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to PowerFit!');
});

app.use(globalErrorHandler);

app.use(notFound);

export default app;
