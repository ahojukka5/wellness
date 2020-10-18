// eslint-disable-next-line @typescript-eslint/no-var-requires
const { calculateBmi, bmiCalculatorCLI } = require('./bmiCalculator');

describe('BMI calculator', () => {
  test('calculates bmi right', () => {
    expect(calculateBmi(180, 40)).toBe('Very severely underweight');
    expect(calculateBmi(180, 50)).toBe('Severely underweight');
    expect(calculateBmi(180, 55)).toBe('Underweight');
    expect(calculateBmi(180, 80)).toBe('Normal (healthy weight)');
    expect(calculateBmi(180, 90)).toBe('Overweight');
    expect(calculateBmi(180, 110)).toBe('Obese Class I (Moderately obese)');
    expect(calculateBmi(180, 120)).toBe('Obese Class II (Severely obese)');
    expect(calculateBmi(180, 130)).toBe(
      'Obese Class III (Very severely obese)'
    );
  });

  test('has working command line interface', () => {
    expect(() => bmiCalculatorCLI(['a'])).toThrow('Not enough arguments');
    expect(() => bmiCalculatorCLI(['a', 'b', '180', '80', '123'])).toThrow(
      'Too many arguments'
    );
    expect(() => bmiCalculatorCLI(['a', 'b', 'height', '80'])).toThrow(
      'height is not a number'
    );
    expect(() => bmiCalculatorCLI(['a', 'b', '180', 'weight'])).toThrow(
      'mass is not a number'
    );

    console.log = jest.fn();
    bmiCalculatorCLI(['a', 'b', '180', '80']);
    expect(console.log.mock.calls[0][0]).toBe('Normal (healthy weight)');
  });
});
