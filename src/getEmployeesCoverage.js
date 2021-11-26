const data = require('../data/zoo_data');

const getEmployee = (information) => {
  const { id = '', name = '' } = information;
  const zooEmployee = data.employees.find(
    (element) => element.id === id
      || element.firstName === name
      || element.lastName === name,
  );
  if (zooEmployee === undefined) {
    throw new Error('Informações inválidas');
  }
  return zooEmployee;
};

const getResponsibleFor = (idSpecies) => {
  const speciesName = [];
  idSpecies.forEach((idSpecie) => {
    speciesName.push(data.species.find((specie) => specie.id === idSpecie).name);
  });
  return speciesName;
};

const getLocations = (idSpecies) => {
  const locations = [];
  idSpecies.forEach((idSpecie) => {
    locations.push(data.species.find((specie) => specie.id === idSpecie).location);
  });
  return locations;
};

let employee;
let responsibleFor2;
let locations;
let obj;
const getEmployeesCoverageElse = (information) => {
  employee = getEmployee(information);
  responsibleFor2 = getResponsibleFor(employee.responsibleFor);
  locations = getLocations(employee.responsibleFor);
  obj = {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: responsibleFor2,
    locations,
  };
  return obj;
};

function getEmployeesCoverage(information) {
  if (information === undefined) {
    const employeesBase = data.employees.filter((objectEmployed) => objectEmployed.id);
    obj = [];
    employeesBase.forEach((element) => {
      responsibleFor2 = getResponsibleFor(element.responsibleFor);
      locations = getLocations(element.responsibleFor);
      obj.push({ id: element.id,
        fullName: `${element.firstName} ${element.lastName}`,
        species: responsibleFor2,
        locations });
    });
  } else {
    obj = getEmployeesCoverageElse(information);
  }
  return obj;
}

module.exports = getEmployeesCoverage;
