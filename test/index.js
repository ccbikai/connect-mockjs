var app = require('../example/app');
var request = require('supertest');
var should = require('should');
process.chdir('example');
describe('mock', function() {
    it('success', function(done) {
        request(app).get('/mock')
        .query({
            mock: 'test'
        })
        .expect(200)
        .end(function(err, res) {
            if (err) {
                return done(err);
            }
            should(res.body.title).be.a.String();
            done();
        });
    });
});
