import app from './app';
import request from 'supertest';

describe('hello endpoint', () => {
  test('should return string from hello endpoint', async () => {
    const response = await request(app).get('/hello');
    const expected = 'Hello Full Stack!';
    expect(response.text).toEqual(expected);
  });
});

describe('bmi endpoint', () => {
  test('should return bmi given properly formatted parameters', async () => {
    const params = { height: 180, weight: 72 };
    const response = await request(app).get('/bmi').query(params);
    const expected = {
      height: 180,
      weight: 72,
      bmi: 'Normal (healthy weight)',
    };
    expect(response.body).toEqual(expected);
  });

  test('should return errors if parameters are malformatted', async () => {
    const params = { height: 180, weight: 'I do not want to tell' };
    const response = await request(app).get('/bmi').query(params);
    const expected = {
      error: 'malformatted parameters',
    };
    expect(response.body).toEqual(expected);
  });
});

describe('exercises endpoint', () => {
  test('should return object given POST with proper parameters', async () => {
    const params = {
      // eslint-disable-next-line @typescript-eslint/camelcase
      daily_exercises: [1, 0, 2, 0, 3, 0, 2.5],
      target: 2.5,
    };
    const expected = {
      periodLength: 7,
      trainingDays: 4,
      success: false,
      rating: 1,
      ratingDescription: 'bad',
      target: 2.5,
      average: 1.2142857142857142,
    };
    const response = await request(app).post('/exercises').query(params);
    expect(response.body).toEqual(expected);
  });
});
