import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { StatusCodes } from 'http-status-codes';
import globalErrorHandler from './app/middlewires/globalError';
import { MessageRouter } from './app/modules/SendMeAMessage/TSendMeAMessage.route';
import { ProjectRouter } from './app/modules/Project/Project.route';
import { BlogRouter } from './app/modules/Blog/Blog.route';

const app: Application = express();

app.use(express.json());
app.use(cors());

//all routes
app.use('/api/p4', MessageRouter);
app.use('/api/p4/projects', ProjectRouter);
app.use('/api/p4/blogs', BlogRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  globalErrorHandler(err, req, res, next);
});


export default app;
