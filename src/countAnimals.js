const data = require("../data/zoo_data");

function countAnimals(animal) {
  // seu código
  let result;
  if (animal === undefined) {
    result = {};
    data.species.forEach((element) => {
      result[element.name] = data.species.find(
        (element2) => element.name === element2.name
      ).residents.length;
    });
  } else if (animal.specie !== undefined && animal.sex === undefined) {
    result = data.species.find((element) => element.name === animal.specie)
      .residents.length;
  } else {
    result = data.species
      .find((element) => element.name === animal.specie)
      .residents.filter((element) => element.sex === animal.sex).length;
  }
  return result;
}

module.exports = countAnimals;
