const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const server = require('./api'); // Ensure the server is properly exported

chai.use(chaiHttp);

describe('Index page', () => {
  it('should return the correct status code', (done) => {
    chai.request('http://localhost:7865')
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });

  it('should return the correct message', (done) => {
    chai.request('http://localhost:7865')
      .get('/')
      .end((err, res) => {
        expect(res.text).to.equal('Welcome to the payment system');
        done();
      });
  });
});
