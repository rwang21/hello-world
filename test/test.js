var main = require('../index');
var fs = require('fs');

var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
chai.should();
//var assert = chai.expect;

describe('read file', function () {
    it('gets data from file', function () {
        return main.readFile('file1.txt', 'utf8').should.eventually.equal("example");
    });
});