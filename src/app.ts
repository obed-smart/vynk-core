import express from 'express';
import routes from './routes/index.ts';
import middlewares from './middlewares/index.ts';
import morgan from 'morgan';

const app = express();

app
  .use(express.json())
  .use(middlewares)
  .use(express.urlencoded({ extended: true }))
  .use(morgan('dev'))
  .get('/', (req, res) => {
    res.json({
      message: 'VYNK api is running successfully',
      status: 'running',
    });
  })
  .use('/api/v1', routes());

export default app;
