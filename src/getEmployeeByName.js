const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  let result = data.employees.find(
    (element) => element.firstName === employeeName || element.lastName === employeeName,
  );
  if (result === undefined) {
    result = {};
  }
  return result;
}

module.exports = getEmployeeByName;
