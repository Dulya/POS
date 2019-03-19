var supertest = require('supertest');
var app = require('../app.js');
const request = require('supertest');

let token;

describe('Testing user api routes', () => {
    it('should respond with status 200 on successful user', (done) => {
        request(app)
            .post('/user/login')
            .send({
                email: 'john.smith@gmail.com',
                password: '123'
            })
            .expect(200, done)

    });

    it('should respond with status 403 on incorrect password on login', (done) => {
        request(app)
            .post('/user/login')
            .send({
                email: 'john.smith@gmail.com',
                password: 'pass'
            })
            .expect(403, done)

    });

    it('should respond with status 404 on incorrect username on login', (done) => {
        request(app)
            .post('/user/login')
            .send({
                user_name: 'smith',
                password: 'pass'
            })
            .expect(404, done)
    });
});