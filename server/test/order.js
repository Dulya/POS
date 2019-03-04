var supertest = require('supertest');
var app = require('../app.js');
const request = require('supertest');

let token;

before((done) => {
    request(app)
        .post('/user/login')
        .send({
            user_name: 'john',
            password: '123'
        })
        .end((err, response) => {
            token = response.headers['set-cookie'][0].split(';')[0];
            done();
        })
});

describe('Testing order api routes', () => {
    it('should return status 200 after retriving order by id', (done) => {
        request(app)
            .get('/api/order/id/O00001')
            .set('cookie', token)
            .expect('Content-Type', /json/)
            .expect(200)
            .expect(200, done);
    });

    it('should return status 200 after retriving order by id', (done) => {
        request(app)
            .get('/api/order/id/O00001')
            .set('cookie', token)
            .expect('Content-Type', /json/)
            .expect(200)
            .expect(200, done);
    });

    it('should return status 401 if order id is not present', (done) => {
        request(app)
            .get('/api/order/id/O00005')
            .set('cookie', token)
            .expect('Content-Type', /json/)
            .expect(401)
            .expect(401, done);
    });

    it('should return status 200 after retriving all orders by logged in user', (done) => {
        request(app)
            .get('/api/user')
            .set('cookie', token)
            .expect('Content-Type', /json/)
            .expect(200)
            .expect(200, done);
    });
});