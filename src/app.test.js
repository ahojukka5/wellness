const app = require('./app');
const request = require('supertest');

test('should return string from hello endpoint', async () => {
  const response = await request(app).get('/hello');
  const expected = 'Hello Full Stack!';
  expect(response.text).toBe(expected);
});
