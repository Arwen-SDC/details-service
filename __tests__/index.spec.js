/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../server/index.js');


describe('Test API GET route', () => {
  it('Should respond with 200 for a record in the DB', async (done) => {
    const response = await request(app).get('/api/game/1');
    expect(response.statusCode).toBe(200);
    done();
  });

  it('Should respond the correct game id', async (done) => {
    const response = await request(app).get('/api/game/1');
    expect(response.body[0].id).toBe(1);
    done();
  });
});
