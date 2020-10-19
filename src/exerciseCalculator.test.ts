// eslint-disable-next-line @typescript-eslint/no-var-requires
const { getRating, exerciseCalculatorCLI } = require('./exerciseCalculator');

describe('Exercise calculator', () => {
  test('getRating is working', () => {
    expect(getRating(0, 1)).toStrictEqual({
      rating: 0,
      ratingDescription: 'you need to start execising',
    });
    expect(getRating(0.1, 1)).toStrictEqual({
      rating: 1,
      ratingDescription: 'bad',
    });
    expect(getRating(0.75, 1)).toStrictEqual({
      rating: 2,
      ratingDescription: 'not too bad but could be better',
    });
    expect(getRating(1.25, 1)).toStrictEqual({
      rating: 3,
      ratingDescription: 'good work, keep on going',
    });
    expect(getRating(1.75, 1)).toStrictEqual({
      rating: 4,
      ratingDescription: 'excellent work',
    });
  });

  test('has working command line interface', () => {
    expect(() => exerciseCalculatorCLI(['a'])).toThrow('Not enough arguments');

    expect(() => exerciseCalculatorCLI(['a', 'b', 'target', '1'])).toThrow(
      'Parameter target is not a number!'
    );

    expect(() =>
      exerciseCalculatorCLI([
        '2',
        '1',
        '0',
        '2',
        '4.5',
        'a',
        '3',
        '1',
        '0',
        '4',
      ])
    ).toThrow('Argument 5 is not a number!');

    console.log = jest.fn();
    exerciseCalculatorCLI(['2', '1', '0', '2', '4.5', '0', '3', '1', '0', '4']);
    // expect(console.log.mock.calls[0][0]).toBe('good work, keep on going');
  });
});
