const getPaymentTokenFromAPI = require('./6-payment_token');
const { expect } = require('chai');

describe('getPaymentTokenFromAPI', function() {
    it('should return a promise with the object {data: "Successful response from the API"} when success is true', function(done) {
        getPaymentTokenFromAPI(true)
            .then((response) => {
                expect(response).to.have.property('data', 'Successful response from the API');
                done();
            })
            .catch((error) => done(error));
    });
});
