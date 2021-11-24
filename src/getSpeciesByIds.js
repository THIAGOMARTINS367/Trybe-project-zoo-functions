const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {

  // seu código aqui
  let result = [];
  ids.forEach((element) => {
    result.push(data.species.find((element2) => element2.id === element));
  })
  return result;
}

module.exports = getSpeciesByIds;
