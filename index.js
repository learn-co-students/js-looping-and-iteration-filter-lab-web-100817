

function findMatching (drivers, name) {
  return drivers.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase()
  })
}


function fuzzyMatch (drivers, twoLetters) {
  return drivers.filter(function (driverName) {
    return driverName.slice(0,2) === twoLetters;
  })
};

function matchName (drivers, Drivername) {
  return drivers.filter(function (driver) {
    return driver['name'] === Drivername;
  })
}
