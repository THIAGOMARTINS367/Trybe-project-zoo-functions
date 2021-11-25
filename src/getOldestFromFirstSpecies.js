const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const employeeResponsibleForId = employees.find(
    (employee) => employee.id === id
  ).responsibleFor[0];
  const residents = data.species.find(
    (specieObject) => specieObject.id === employeeResponsibleForId
  ).residents;
  let maior = 0;
  let animal;
  residents.forEach((element) => {
    if (element.age > maior) {
      maior = element.age;
      animal = element;
    }
  });
  return Object.values(animal);
}

module.exports = getOldestFromFirstSpecies;
