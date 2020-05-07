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

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2));
