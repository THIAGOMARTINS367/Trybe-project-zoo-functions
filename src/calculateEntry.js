const data = require('../data/zoo_data');

function countEntrants(entrants) {

  // seu código aqui
  let classification = {child: 0, adult: 0, senior:0};
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
  if (entrants === undefined ||
    entrants.length === undefined || entrants.length === 0) {
    entrants = [];
  }
  const {child, adult, senior} = countEntrants(entrants);
  const prices = data.prices;
  return child * prices.child + adult * prices.adult + senior * prices.senior;
}

module.exports = { calculateEntry, countEntrants };
