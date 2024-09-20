const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');
const { expect } = require('chai');

describe('sendPaymentRequestToApi with console.log', function() {
    let spy;

    beforeEach(() => {
        // Spy on the console.log function before each test
        spy = sinon.spy(console, 'log');
    });

    afterEach(() => {
        // Restore the spy after each test
        spy.restore();
    });

    it('should log the total as 120 when called with 100 and 20', function() {
        // Call the function
        sendPaymentRequestToApi(100, 20);

        // Verify that console.log was called once
        expect(spy.calledOnce).to.be.true;

        // Verify the correct message was logged
        expect(spy.calledWithExactly('The total is: 120')).to.be.true;
    });

    it('should log the total as 20 when called with 10 and 10', function() {
        sendPaymentRequestToApi(10, 10);

        expect(spy.calledOnce).to.be.true;

        expect(spy.calledWithExactly('The total is: 20')).to.be.true;
    });
});
``
