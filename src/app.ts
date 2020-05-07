import express from 'express';
import { calculateBmi } from './bmiCalculator';
import { calculateExercises } from './exerciseCalculator';

const app = express();

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

app.post('/exercises', (req, res) => {
  if (!req.query.target || !req.query.daily_exercises) {
    res.json({ error: 'missing parameters' });
    return;
  }
  const target = Number(req.query.target);
  const de: unknown = req.query.daily_exercises;
  if (isNaN(target)) {
    res.json({ error: 'malformatted parameters' });
    return;
  }
  if (!Array.isArray(de)) {
    res.json({ error: 'malformatted parameters' });
    return;
  }
  const hours: number[] = de.map((k) => Number(k));
  if (hours.some(isNaN)) {
    res.json({ error: 'malformatted parameters' });
    return;
  }
  res.json(calculateExercises(hours, target));
});

export default app;
