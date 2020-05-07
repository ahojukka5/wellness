/**
 * Calculate body mass index
 *
 * According to https://en.wikipedia.org/wiki/Body_mass_index
 *
 * Category BMI (kg/m2)
 *                                         from    to
 * Very severely underweight                       15
 * Severely underweight	                     15    16
 * Underweight                               16  18.5
 * Normal (healthy weight)                 18.5    25
 * Overweight                                25    30
 * Obese Class I (Moderately obese)          30	   35
 * Obese Class II (Severely obese)           35    40
 * Obese Class III (Very severely obese)     40
 *
 * @param mass given as kilograms
 * @param height given as metres
 * @returns category as given in the table above
 */
const calculateBmi = (height: number, mass: number): string => {
  const h = height / 100.0;
  const bmi = mass / (h * h);
  if (bmi < 15.0) {
    return 'Very severely underweight';
  } else if (bmi < 16.0) {
    return 'Severely underweight';
  } else if (bmi < 18.5) {
    return 'Underweight';
  } else if (bmi < 25.0) {
    return 'Normal (healty weight)';
  } else if (bmi < 30.0) {
    return 'Overweight';
  } else if (bmi < 35.0) {
    return 'Obese Class I (Moderately obese)';
  } else if (bmi < 40.0) {
    return 'Obese Class II (Severely obese)';
  } else {
    return 'Obese Class III (Very severely obese)';
  }
};

interface bmiValues {
  height: number;
  mass: number;
}

try {
  const args = process.argv;
  if (args.length < 4) throw new Error('Not enough arguments');
  if (args.length > 4) throw new Error('Too many arguments');
  if (isNaN(Number(args[2])) || isNaN(Number(args[3])))
    throw new Error('Provided values were not numbers!');
  const height = Number(args[2]);
  const mass = Number(args[3]);
  console.log(calculateBmi(height, mass));
} catch (e) {
  console.log('Error:', e.message);
}
