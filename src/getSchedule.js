const data = require("../data/zoo_data");

function getSchedule(scheduleTarget) {
  const days = Object.keys(data.hours);
  const specie = data.species.map((element) => element.name);
  let getFunctionResult = {};

  if (days.includes(scheduleTarget)) {
    getFunctionResult = getDaySchedule(scheduleTarget);

  } else if (specie.includes(scheduleTarget)) {
    getFunctionResult = data.species.find((element) => element.name === scheduleTarget).availability;

  } else {
    let object;
    days.forEach((day) => {
      object = getDaySchedule(day);
      getFunctionResult[day] = object[day];
    });
  }

  return getFunctionResult
}

const getDaySchedule = (scheduleTarget) => {

  // seu código aqui
  let result;
  const availableAnimals = data.species.filter((element) =>
    element.availability.includes(scheduleTarget)
  ).map((element) => element.name);
  if (scheduleTarget === 'Monday') {
    result = {
      [scheduleTarget]: {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      }
    };
  } else {
    result = {
      [scheduleTarget]: {
        officeHour: `Open from ${data.hours[scheduleTarget].open}am until ${data.hours[scheduleTarget].close}pm`,
        exhibition: availableAnimals,
      }
    };
  }
  return result;
}

module.exports = getSchedule;
