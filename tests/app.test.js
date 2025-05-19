import request from 'supertest';
import app from '../src/app.js';

// Test 1 : La route / retourne le bon message
test('GET / should return Hello, World!', async () => {
  const response = await request(app).get('/');
  expect(response.statusCode).toBe(200);
  expect(response.text).toBe('Hello, World!');
});

// Test 2 : Une route inconnue retourne 404
test('GET /notfound should return 404', async () => {
  const response = await request(app).get('/notfound');
  expect(response.statusCode).toBe(404);
});