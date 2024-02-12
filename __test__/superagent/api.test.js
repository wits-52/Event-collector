const request = require('supertest');
const app = require('../../src/app');


describe('GET /healthCheck', () => {
    test('status should be 200', () => {
        request(app)
        .get('/healthCheck')
        .expect('Content-Type', /json/)
        .expect(200)
        .then(res => {
            expect(res.body.message).toEqual('API is Healthy :)');
        })
    });
});
