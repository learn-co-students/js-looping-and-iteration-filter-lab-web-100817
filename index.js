// Code your solution in this file
function findMatching(array, string){
  return array.filter(function (driverName) {
    return driverName.toLowerCase() === string.toLowerCase()
  });
}

function fuzzyMatch(drivers, string){
  return drivers.filter (function (driverName) {
    return driverName.slice(0,string.length) === string
  })
}
  function matchName (list, name) {
  return list.filter(function (driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}
