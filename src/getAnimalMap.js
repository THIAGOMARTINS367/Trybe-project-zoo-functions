const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalMap(options) {
  // seu código aqui
  const objectResult = {};
  let optionsVerified;
  if (options === undefined) {
    optionsVerified = {};
  } else {
    optionsVerified = options;
  }
  const { includeNames = false, sorted = false, sex = false } = optionsVerified;
  if (includeNames === false) {
    species.forEach((element) => {
      objectResult[element.location] = data.species.filter((element2) => element2.location === element.location)
        .map((element3) => element3.location === element.location ? element3.name : '');
    });
  } else {
    const animalNames = [];
    let arrayEspecie;
    let speciesByLocation;
    data.species.forEach((element) => {
      speciesByLocation = data.species
        .filter((element2) => element2.location === element.location);
      speciesByLocation.forEach((specie) => {
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
          if (objectResult[specie.location] === undefined) {
            objectResult[specie.location] = [];
          }
          objectResult[specie.location].push(arrayEspecie);
        }
      });
    });
  }
  return objectResult;
}

module.exports = getAnimalMap;
