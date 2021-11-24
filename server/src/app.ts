import express, { Application, Request, Response } from 'express';

const app: Application = express();

const add = (a: number, b: number): number => a + b;

app.get('/', (req: Request, res: Response) => {
  console.log(add(2, 1));
  res.send('Hello World!');
});

app.listen(3001, () => {
  console.log('Example app listening on port 3001');
});
