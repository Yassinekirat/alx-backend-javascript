const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');
const { expect } = require('chai');

describe('sendPaymentRequestToApi with stub', function() {
    let stub, spy;

    beforeEach(() => {
        stub = sinon.stub(Utils, 'calculateNumber').returns(10);

        spy = sinon.spy(console, 'log');
    });

    afterEach(() => {
        stub.restore();
        spy.restore();
    });

    it('should call Utils.calculateNumber with SUM and the correct arguments', function() {
        sendPaymentRequestToApi(100, 20);

        expect(stub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;

        expect(spy.calledOnceWithExactly('The total is: 10')).to.be.true;
    });
});
