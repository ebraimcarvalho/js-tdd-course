/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */
/* eslint-disable padded-blocks */
/* eslint-disable space-before-function-paren */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
/* eslint-disable no-undef */
/* eslint-disable no-var */
/* eslint-disable prefer-destructuring */

import { expect } from 'chai';
import tests from '../src/tests';

describe('Tests', function () {
  describe('Smoke Tests', () => {
    it('should exist calc', () => {
      expect(tests).to.exist;
    });

    it('should exist sum in tests', () => {
      expect(tests.sum).to.exist;
      expect(tests.sum).to.be.a('function');
    });
    it('should exist sub in tests', () => {
      expect(tests.sub).to.exist;
      expect(tests.sub).to.be.a('function');
    });
    it('should exist mult in tests', () => {
      expect(tests.mult).to.exist;
      expect(tests.mult).to.be.a('function');
    });
    it('should exist div in tests', () => {
      expect(tests.div).to.exist;
      expect(tests.div).to.be.a('function');
    });
  });


  describe('Sum', () => {
    it('should return 4 when `sum(2, 2)`', () => {
      expect(tests.sum(2, 2)).to.be.equal(4);
    });
  });

  describe('Sub', () => {
    it('should return 4 when `sub(6, 2)`', () => {
      expect(tests.sub(6, 2)).to.be.equal(4);
    });

    it('should return -4 when `sub(6, 10)`', () => {
      expect(tests.sub(6, 10)).to.be.equal(-4);
    });
  });

  describe('Mult', () => {
    it('should return 9 when `mult(3, 3)`', () => {
      expect(tests.mult(3, 3)).to.be.equal(9);
    });
  });

  describe('Div', () => {
    it('should return 5 when `div(25, 5)`', () => {
      expect(tests.div(25, 5)).to.be.equal(5);
    });

    it('should return `It is not possible divide with any divisor being 0`', () => {
      expect(tests.div(0, 1)).to.be.equal('It is not possible divide with any divisor being 0');
    });
  });

  describe('FizzBuzz', () => {
    it('should return `Fizz` when multiple of 3', () => {
      expect(tests.fizzBuzz(3)).to.be.equal('Fizz');
    });

    it('should return `Buzz` when multiple of 5', () => {
      expect(tests.fizzBuzz(10)).to.be.equal('Buzz');
    });

    it('should return `FizzBuzz` when multiple of 3 and 5', () => {
      expect(tests.fizzBuzz(15)).to.be.equal('FizzBuzz');
    });

    it('should return 7 when `fizzBuzz(7)`', () => {
      expect(tests.fizzBuzz(7)).to.be.equal(7);
    });
  });

});
