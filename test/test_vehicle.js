const expect = require('chai').expect;
const car = require('../carmodel');

let dodge=new car('viper','dodge','4','silver')
console.log(dodge.colour)
describe('car class Tests', () => {
    it('car class test', function (done) {
        let dodge=new car('viper','dodge',4,'silver')
        expect(dodge).to.be.a('object', 'Must match String');
        done();
    });

    it('car Name test', function (done) {
        expect(dodge.name).to.be.a('string', 'Must be String');
        done();
    });

    it('car colour test', function (done) {
        expect(dodge.colour).to.be.a('string', 'Must be String');
        done();
    });

    it('car Brands test', function (done) {
        expect(dodge.brand).to.be.a('string', 'Must be String');
        done();
    });

    it('car Doors test', function (done) {
        expect(parseInt(dodge.doors)).to.be.a('number', 'Must be number');
        done();
    });

})