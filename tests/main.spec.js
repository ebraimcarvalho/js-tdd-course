/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */
/* eslint-disable padded-blocks */
/* eslint-disable space-before-function-paren */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
/* eslint-disable no-undef */
/* eslint-disable no-var */
/* eslint-disable prefer-destructuring */
var expect = require('chai').expect;
var calc = require('../src/tests');

describe('Calc', function () {
  describe('Smoke Tests', () => {
    it('should exist calc', function() {
      expect(calc).to.exist;
    });

    it('should exist sum in calc', () => {
      expect(calc.sum).to.exist;
      expect(calc.sum).to.be.a('function');
    });
    it('should exist sub in calc', () => {
      expect(calc.sub).to.exist;
      expect(calc.sub).to.be.a('function');
    });
    it('should exist mult in calc', () => {
      expect(calc.mult).to.exist;
      expect(calc.mult).to.be.a('function');
    });
    it('should exist div in calc', () => {
      expect(calc.div).to.exist;
      expect(calc.div).to.be.a('function');
    });
  });


  describe('Sum', () => {
    it('should return 4 when `sum(2, 2)`', () => {
      expect(calc.sum(2, 2)).to.be.equal(4);
    });
  });

  describe('Sub', () => {
    it('should return 4 when `sub(6, 2)`', () => {
      expect(calc.sub(6, 2)).to.be.equal(4);
    });

    it('should return -4 when `sub(6, 10)`', () => {
      expect(calc.sub(6, 10)).to.be.equal(-4);
    });
  });

  describe('Mult', () => {
    it('should return 9 when `mult(3, 3)`', () => {
      expect(calc.mult(3, 3)).to.be.equal(9);
    });
  });

  describe('Div', () => {
    it('should return 5 when `div(25, 5)`', () => {
      expect(calc.div(25, 5)).to.be.equal(5);
    });

    it('should return `It is not possible divide with any divisor being 0`', () => {
      expect(calc.div(0, 1)).to.be.equal('It is not possible divide with any divisor being 0');
    });
  });

});
