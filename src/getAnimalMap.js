const { species } = require('../data/zoo_data');

const data = require('../data/zoo_data');

let result = {};
let animalNames = [];
let arrayEspecie;
let speciesByLocation;

const getAnimalMapElse2Point1 = (sorted, specie) => {
  if (sorted === true) {
    arrayEspecie[specie.name].sort();
  }
  animalNames.push(specie.name);
  if (result[specie.location] === undefined) {
    result[specie.location] = [];
  }
  result[specie.location].push(arrayEspecie);
};

const getAnimalMapElse2 = (sorted, specie, sex) => {
  if (animalNames.includes(specie.name) === false) {
    arrayEspecie = { [specie.name]: specie.residents.map((element4) => {
      let animalSex;
      if (sex === element4.sex || sex === false) {
        animalSex = element4.name;
      }
      return animalSex;
    }).filter((element3) => element3 !== undefined) };
    getAnimalMapElse2Point1(sorted, specie);
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

let objectResult;
const getAnimalMapTrue = () => {
  species.forEach((element) => {
    const locations = data.species.filter((element2) => element2.location === element.location);
    objectResult[element.location] = locations
      .map((element3) => element3.name);
  });
};

let optionsVerified;
function getAnimalMap(options) {
  objectResult = {};
  if (options === undefined) {
    optionsVerified = {};
  } else {
    optionsVerified = options;
  }
  const { includeNames = false, sorted = false, sex = false } = optionsVerified;
  if (includeNames === false) {
    getAnimalMapTrue();
  } else {
    objectResult = getAnimalMapElse(sorted, sex);
  }
  return objectResult;
}

module.exports = getAnimalMap;
