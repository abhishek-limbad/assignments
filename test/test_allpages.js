const request = require('request');
const expect = require('chai').expect;

describe('all routes testing ', () => {

    it('home page test', function (done) {
        request('http://localhost:3000/home', function (error, response, body) {
            expect(body).to.equal('Home page');
            done();
        });
    });

    it('training page test', function (done) {
        request('http://localhost:3000/training', function (error, response, body) {
            expect(body).to.equal('traning page');
            done();
        });
    });

    it('doctuments page test', function (done) {
        request('http://localhost:3000/doctuments', function (error, response, body) {
            expect(body).to.equal('doctuments page');
            done();
        });
    });

    it('about us page test', function (done) {
        request('http://localhost:3000/aboutus', function (error, response, body) {
            expect(body).to.equal('About Us page');
            done();
        });
    });

    it('404 page not found', function (done) {
        request('http://localhost:3000/abcxyz', function (error, response, body) {
            expect(body).to.equal('page not found');
            done();
        });
    });

})