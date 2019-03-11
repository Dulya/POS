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

describe('Testing orderitem api routes', () => {
    it('should return status 200 after deleting the orderitem with given id', (done) => {
        request(app)
            .delete('/api/orderitem/3')
            .set('cookie', token)
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, res) => {
                if (err) {
                    return done(err);
                }
                done();
            });


    });

    /*it('should return status 400 on incorrect data on delete query', (done) => {
        request(app)
            .delete('/api/orderitem/oo1')
            .set('cookie', token)
            .expect('Content-Type', /json/)
            .expect(400)
            .end((err, res) => {
                if (err) {
                    return done(err);
                }
                done();
            });
    });*/

    it('should return status 200 after updating the orderitem with given id', (done) => {
        request(app)
            .put('/api/orderitem')
            .send({
                item_name: "Vanilla Milk Shake (300ml)",
                price: 400,
                orderitem_id: 4,
                order_id: "O00001",
                item_id: 10,
                quantity: 4
            })
            .set('cookie', token)
            .expect('Content-Type', /json/)
            .expect(200)
            .end(done);
    });

    it('should return status 404 when row is not found for update query', (done) => {
        request(app)
            .put('/api/orderitem')
            .send({
                item_name: "Vanilla Milk Shake (300ml)",
                price: 400,
                orderitem_id: 23,
                order_id: "O00001",
                item_id: 10,
                quantity: 4
            })
            .set('cookie', token)
            .expect('Content-Type', /json/)
            .expect(404)
            .end(done);
    });

    it('should return status 200 after adding a new orderitem', (done) => {
        request(app)
            .post('/api/orderitem')
            .send({
                order_id: 'O00001',
                item_id: 10,
                quantity: 6
            })
            .set('cookie', token)
            .expect('Content-Type', /json/)
            .expect(200)
            .expect(200, done);
    });

    it('should return status 500 on incorrect data on add query', (done) => {
        request(app)
            .post('/api/orderitem')
            .send({
                order_id: 'O00001',
                item_id: 10,
                quantity: 'abc'
            })
            .set('cookie', token)
            .expect('Content-Type', /json/)
            .expect(400)
            .end((err, res) => {
                if (err) {
                    return done(err);
                }
                done();
            });
    });

    it('should return error on  incorect data on update order item query', (done) => {
        request(app)
            .put('/api/orderitem')
            .send({
                item_name: "Vanilla Milk Shake (300ml)",
                price: 400,
                orderitem_id: 4,
                order_id: "O00001",
                item_id: 10,
                quantity: 'abc'
            })
            .set('cookie', token)
            .expect('Content-Type', /json/)
            .expect(400)
            .end((err, res) => {
                if (err) {
                    return done(err);
                }
                done();
            });
    });
});