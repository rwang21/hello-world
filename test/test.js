var main = require('../index.js');
var assert = require('assert');

describe('add two numbers', function () {

    it('should return the sum', function () {
        assert.equal(main.sum(1,1), 2);
    })
})

describe('add three numbers', function () {

    it('should return the sum', function () {
        assert.equal(main.sum(1,1,1), 3);
    })
})

describe('add one number', function () {

    it('should return the sum', function () {
        assert.equal(main.sum(1), 1);
    })
})

describe('add zero numbers', function () {

    it('should return the sum', function () {
        assert.equal(main.sum(), 0);
    })
})