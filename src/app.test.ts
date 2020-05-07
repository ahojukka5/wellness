const app = require('./app');
const request = require('supertest');

describe('hello endpoint', () => {
  test('should return string from hello endpoint', async () => {
    const response = await request(app).get('/hello');
    const expected = 'Hello Full Stack!';
    expect(response.text).toBe(expected);
  });
});

describe('bmi endpoint', () => {
  test('should return bmi given properly formatted parameters', async () => {
    const params = { height: 180, weight: 72 };
    const response = await request(app).get('/bmi').query(params);
    expect(response.body).toEqual(
      expect.objectContaining({
        height: 180,
        weight: 72,
        bmi: 'Normal (healthy weight)',
      })
    );
  });

  test('should return errors if parameters are malformatted', async () => {
    const params = { height: 180, weight: 'I do not want to tell' };
    const response = await request(app).get('/bmi').query(params);
    expect(response.body).toEqual(
      expect.objectContaining({
        error: 'malformatted parameters',
      })
    );
  });
});
