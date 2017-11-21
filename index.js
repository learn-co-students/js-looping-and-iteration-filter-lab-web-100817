// Code your solution in this file
function findMatching(list, name) {

  return list.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase()
  });
}

function fuzzyMatch (list, name) {
  return list.filter(function (driverName){
    return driverName.charAt(0) === name.charAt(0)
  });
}

function matchName (list, nombre) {
  return list.filter(function (driverName) {
    return driverName.name.toLowerCase() === nombre.toLowerCase()
  });
}
