const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {

  // seu código aqui
  const { residents } = data.species.find((element) => element.name === animal);
  return residents.every((element) => element.age >= age);
}

module.exports = getAnimalsOlderThan;
