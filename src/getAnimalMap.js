const { species } = require('../data/zoo_data');

const data = require('../data/zoo_data');

let result = {};
let animalNames = [];
let arrayEspecie;
let speciesByLocation;

const getAnimalMapElse2 = (sorted, specie, sex) => {
  if (animalNames.includes(specie.name) === false) {
    arrayEspecie = { [specie.name]: specie.residents.map((element4) => {
      let animalSex;
      if (sex === element4.sex || sex === false) {
        animalSex = element4.name;
      }
      return animalSex;
    }).filter((element3) => element3 !== undefined) };
    if (sorted === true) {
      arrayEspecie[specie.name].sort();
    }
    animalNames.push(specie.name);
    if (result[specie.location] === undefined) {
      result[specie.location] = [];
    }
    result[specie.location].push(arrayEspecie);
  }
};

const getAnimalMapElse = (sorted, sex) => {
  result = {};
  animalNames = [];
  arrayEspecie = undefined;
  speciesByLocation = undefined;
  data.species.forEach((element) => {
    speciesByLocation = data.species
      .filter((element2) => element2.location === element.location);
    speciesByLocation.forEach((specie) => {
      getAnimalMapElse2(sorted, specie, sex);
    });
  });
  return result;
};

function getAnimalMap(options) {
  let objectResult = {};
  let optionsVerified;
  if (options === undefined) {
    optionsVerified = {};
  } else {
    optionsVerified = options;
  }
  const { includeNames = false, sorted = false, sex = false } = optionsVerified;
  if (includeNames === false) {
    species.forEach((element) => {
      objectResult[element.location] = data.species
        .filter((element2) => element2.location === element.location)
        .map((element3) => element3.location === element.location ? element3.name : '');// função de seta usada ambiguamente com uma expressão condicional.
    });
  } else {
    objectResult = getAnimalMapElse(sorted, sex);
  }
  return objectResult;
};

module.exports = getAnimalMap;
