import express from 'express';
const { calculateBmi } = require('./bmiCalculator.ts');

const app = express();
module.exports = app;

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
  const height = Number(req.query.height);
  const weight = Number(req.query.weight);
  if (isNaN(height) || isNaN(weight)) {
    res.json({ error: 'malformatted parameters' });
  } else {
    const bmi = calculateBmi(height, weight);
    res.json({ height, weight, bmi });
  }
});
