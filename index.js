// Code your solution in this file
function findMatching(drivers, string) {
  return drivers.filter(function (driver) {
    const driverLowerCase = driver.toLowerCase();
    return driverLowerCase.includes(string.toLowerCase());
  });
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(function (drivers) {
    if (drivers[0] === string[0]) {
      return drivers.includes(string);
    }
  });
}

function matchName(drivers, string) {
  return drivers.filter(driver => driver.name.includes(string));
}
