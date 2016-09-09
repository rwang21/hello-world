var main = require('../db.js');

var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
chai.should();
//var assert = chai.expect;

describe('testing db', function () {
    it('get password for existing user', function () {
        var user = {
            userid: 'bill4',
        };
        return main.getPassword(user).should.eventually.equal("password");
    });

    it('get password for non-existing user', function () {
        var user = {
            userid: 'test',
        };
        return main.getPassword(user).should.be.rejectedWith("no user with that userid");
    });
});
