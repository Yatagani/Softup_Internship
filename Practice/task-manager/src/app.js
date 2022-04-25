import express from 'express';
import { establishConnection } from './db/mongoose.js';
import userRouter from './routers/user.js';
import taskRouter from './routers/task.js';

export const app = express();
establishConnection();

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

