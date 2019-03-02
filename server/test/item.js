var supertest = require('supertest');  

describe('User api routes', () => {
    it('should respond with all items', (done) => {
        server.get('/api/item')
        .expect('Content-type',/json/)
        .expect(200)
        .end((res,err) => {
            res.status.should.equal(200);        
        });
    });
});