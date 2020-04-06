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

});
