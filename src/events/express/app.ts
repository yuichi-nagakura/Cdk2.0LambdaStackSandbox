import express from 'express';

const app = express();
const router = express.Router();

router.get('/', (req, res) => {
  return res.json({ message: 'hello ! /' }).sendStatus(200);
});

router.get('/hello/:name', (req, res) => {
  return res.json({ message: `Hello! ${req.params.name}` }).sendStatus(200);
});

app.use('/', router);

export { app };
