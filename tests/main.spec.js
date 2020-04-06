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

describe('Main', function () {
  var arr;

  // roda todas as vezes, antes de CADA bloco
  beforeEach(function () {
    arr = [1, 2, 3];
  });

  // testar tipos ou se existe (smoke test)
  // eslint-disable-next-line space-before-function-paren
  it('should be an array', function() {
    expect(arr).to.be.a('array');
  });

  it('should have a size of 4 when push another value to the array', function() {
    arr.push(4);
    expect(arr).to.be.lengthOf(4);
  });

  it('should remove the value 3 when use pop in the array', function() {
    arr.pop();
    expect(arr).to.not.include(3);
  });

  it('should return true when pop 3 from the array', function() {
    expect(arr.pop() === 3).to.be.true;
  });

  it('should have a size of 2 when pop a value from the array', function() {
    arr.pop();
    expect(arr).to.have.length(2);
  });

});
