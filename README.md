# wellness

[![Build Status][travis-img]][travis-url]
[![Coverage Status][coveralls-img]][coveralls-url]

Package author: Jukka Aho (@ahojukka5, ahojukka5@gmail.com)

Wellness is a superior wellness application with millions of wonderful features.

## Install

Just clone it to your favorite place:

```bash
git clone https://github.com/ahojukka5/wellness
cd wellness
npm install
```

## Usage

To calculate body mass index:

```bash
npm run calculateBmi <height> <mass>
```

For example:

```bash
npm run calculateBmi 180 80

# output

Normal (healthy weight)
```

To calculate do you exercise enough:

```bash
npm run calculateExercises 2 1 0 2 4.5 0 3 1 0 4

# output

{ periodLength: 9,
  trainingDays: 6,
  success: false,
  rating: 2,
  ratingDescription: 'not too bad but could be better',
  target: 2,
  average: 1.7222222222222223 }
```

[travis-img]: https://travis-ci.org/ahojukka5/wellness.svg?branch=master
[travis-url]: https://travis-ci.org/ahojukka5/wellness
[coveralls-img]: https://coveralls.io/repos/github/ahojukka5/wellness/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/ahojukka5/wellness?branch=master
