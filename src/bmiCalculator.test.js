const { calculateBmi, bmiCalculatorCLI } = require('./bmiCalculator');

test('calculates bmi right', () => {
  expect(calculateBmi(180, 80)).toBe('Normal (healthy weight)');
});
