// Code your solution in this file
function findMatching(drivers, str) {
  return drivers.filter(function (name) {
    return name.toLowerCase() === str.toLowerCase()
  })
}

function fuzzyMatch(drivers, str) {
  let len = str.length

  return drivers.filter(function (name) {
    return name.slice(0, len) === str
  })
}

function matchName(drivers, str) {
  return drivers.filter(function(name) {
    return name.name.toLowerCase() === str.toLowerCase()
  })
}
