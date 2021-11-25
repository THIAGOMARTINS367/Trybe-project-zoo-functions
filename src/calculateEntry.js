const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  const classification = { child: 0, adult: 0, senior: 0 };
  entrants.forEach((element) => {
    let { child, adult, senior } = classification;
    if (element.age < 18) {
      child += 1;
      classification.child = child;
    } else if (element.age >= 18 && element.age < 50) {
      adult += 1;
      classification.adult = adult;
    } else if (element.age >= 50) {
      senior += 1;
      classification.senior = senior;
    }
  });
  return classification;
}

function calculateEntry(entrants) {
  // seu código aqui
  let entrantsVerified;
  if (entrants === undefined || entrants.length === undefined || entrants.length === 0) {
    entrantsVerified = [];
  } else {
    entrantsVerified = entrants;
  }
  let entrantsClass = countEntrants(entrantsVerified);
  const { child, adult, senior } = data.prices
  return entrantsClass.child * child + entrantsClass.adult * adult + entrantsClass.senior * senior;
}

const entrants = [
  { name: 'thiago', age: 5 },
  { name: 'thiago', age: 5 },
  { name: 'thiago', age: 5 },
  { name: 'thiago', age: 18 },
  { name: 'thiago', age: 18 },
  { name: 'thiago', age: 50 },
];

console.log(calculateEntry(entrants))

module.exports = { calculateEntry, countEntrants };
