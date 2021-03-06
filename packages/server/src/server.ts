import express from 'express';
import { errorHandler } from './middlewares/errorHandler';
import { getRoutes } from './routes';
import cookieParser from 'cookie-parser';

const app = express();
const PORT = process.env.PORT || 3003;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use('/api', getRoutes());

app.use(errorHandler);

app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT);
});
