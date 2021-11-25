const data = require("../data/zoo_data");

const getEmployee = (information) => {
  const { id = '', name = '' } = information;
  let employee = data.employees.find(
    (element) =>
      element.id === id ||
      element.firstName === name ||
      element.lastName === name
  );
  if (employee === undefined) {
    throw new Error('Informações inválidas');
  }
  return employee;
}

const getResponsibleFor = (idSpecies) => {
  let speciesName = [];
  idSpecies.forEach(idSpecie => {
    speciesName.push(data.species.find((specie) => specie.id === idSpecie).name);
  });
  return speciesName;
}

const getLocations = (idSpecies) => {
  let locations = [];
  idSpecies.forEach(idSpecie => {
    locations.push(data.species.find((specie) => specie.id === idSpecie).location);
  });
  return locations;
}


function getEmployeesCoverage(information) {

  // seu código aqui
  let employee;
  let responsibleFor2;
  let locations;
  let obj;
  if (information === undefined) {
    let employeesBase = data.employees.filter((employee) => employee.id);
    obj = [];
    employeesBase.forEach((element) => {
      responsibleFor2 = getResponsibleFor(element.responsibleFor);
      locations = getLocations(element.responsibleFor);
      obj.push({id: element.id,
        fullName: `${element.firstName} ${element.lastName}`,
        species: responsibleFor2,
        locations: locations,});
    });
  } else {
    employee = getEmployee(information);
    responsibleFor2 = getResponsibleFor(employee.responsibleFor);
    locations = getLocations(employee.responsibleFor);
    obj = {
      id: employee.id,
      fullName: `${employee.firstName} ${employee.lastName}`,
      species: responsibleFor2,
      locations: locations,
    }
  }
  return obj;
}

module.exports = getEmployeesCoverage;
