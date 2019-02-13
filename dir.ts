import * as express from 'express';

const app = express.Router();

// création d'un middleware
app.use((req, res, next) => {
  console.log('We are in dir.');
  next();
});

app.get('/date', (req, res, next) => {
  res.json({
    date: new Date()
  });
});

export const dir = app;

