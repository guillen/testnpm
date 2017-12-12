const expect = require('chai').expect;
const spanishdate = require('..').default;

describe('check a date', () => {
    it('check december 1 2017 day', () => {
        const result = "Viernes 1 de Diciembre de 2017";
        expect(spanishdate(new Date(2017, 11, 1))).to.equal(result);
    });
});
