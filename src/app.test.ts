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
  });
});
