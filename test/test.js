'use strict';

const chai = require('chai');
const chaiHTTP = require('chai-http');

const server = require('../server');

const should = chai.should();
chai.use(chaiHTTP);

describe('employees api', function () {
  it('seharusnya bisa menampilkan data employees', function (done) {
    chai
      .request(server)
      .get('/api/v1/data')
      .end(function (err, res) {
        if (err) {
          console.error(err);
        }
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.have.property('success');
        res.body.should.have.property('data');
        res.body.should.have.property('code');
        done();
      });
  });
});
