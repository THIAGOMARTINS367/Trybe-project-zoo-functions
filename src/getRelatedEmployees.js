const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  const array = [];
  data.employees.forEach((element) => {
    array.push(...element.managers);
  });
  return array.some((element) => element === id);
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  let result;
  if (isManager(managerId) === true) {
    result = data.employees
      .filter((element) => element.managers.includes(managerId))
      .map((element) => `${element.firstName} ${element.lastName}`);
  } else {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return result;
}

module.exports = { isManager, getRelatedEmployees };
