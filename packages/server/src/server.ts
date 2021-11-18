import type { Request, Response } from 'express';
import express from 'express';

const app = express();
const PORT = 3003;

app.get('/', (req: Request, res: Response) => {
  res.json({ greeting: 'Hello world!' });
});

app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT);
});
