const tests = {
  sum: (num1, num2) => num1 + num2,
  sub: (num1, num2) => num1 - num2,
  mult: (num1, num2) => num1 * num2,
  div: (num1, num2) => ((num1 && num2) ? num1 / num2 : 'It is not possible divide with any divisor being 0'),
  fizzBuzz: (num) => {
    if (num === 0) return 0;
    if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
    if (num % 3 === 0) return 'Fizz';
    if (num % 5 === 0) return 'Buzz';
    return num;
  },
};
export default tests;
