const calc = {
  sum: (num1, num2) => num1 + num2,
  sub: (num1, num2) => num1 - num2,
  mult: (num1, num2) => num1 * num2,
  div: (num1, num2) => ((num1 && num2) ? num1 / num2 : 'It is not possible divide with any divisor being 0'),
};
export default calc;
