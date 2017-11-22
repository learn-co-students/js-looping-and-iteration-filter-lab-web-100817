// Code your solution in this file

function findMatching(drivers, name) {
  return drivers.filter(function (driverName) {
    return driverName === name || driverName === name.toLowerCase();
  })
}

function fuzzyMatch(drivers, name) {
  return drivers.filter((driverName) => {
    return driverName.slice(0, 2) === name;
  })
}

function matchName(drivers, name) {
  return drivers.filter((driver) => {
    return driver.name === name;
  })
}