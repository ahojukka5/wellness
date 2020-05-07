interface getRatingResults {
  rating: number;
  ratingDescription: string;
}

const getRating = (average: number, target: number): getRatingResults => {
  if (average == 0.0) {
    return { rating: 1, ratingDescription: 'you need to start execising' };
  }
  if (average < target) {
    return { rating: 2, ratingDescription: 'not too bad but could be better' };
  }
  return { rating: 3, ratingDescription: 'good work, keep on going' };
};

interface Result {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

const calculateExercises = (hours: number[], target: number): Result => {
  const periodLength = hours.length;
  const trainingDays = hours.filter((h: number) => h != 0.0).length;
  const average =
    hours.reduce((a: number, b: number) => a + b, 0) / periodLength;
  const success = average >= target;
  const { rating, ratingDescription } = getRating(average, target);

  return {
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription,
    target,
    average,
  };
};

try {
  const args = process.argv;
  if (args.length < 4) throw new Error('Not enough arguments');
  const target = Number(args[2]);
  if (isNaN(target)) throw new Error('Parameter target is not a number!');
  const hours = [];
  for (let i: number = 3; i < args.length; i++) {
    const val = Number(args[i]);
    if (isNaN(val)) throw new Error(`Argument ${i} is not a number!`);
    hours.push(val);
  }
  console.log(calculateExercises(hours, target));
} catch (e) {
  console.log('Error:', e.message);
}
