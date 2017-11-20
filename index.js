// Code your solution in this file
function findMatching(ar, name) {
  return ar.filter(function (e) {return e.toUpperCase() === name.toUpperCase()})
}

function fuzzyMatch(ar, name) {
  return ar.filter(function (e) {return e.toUpperCase().slice(0,name.length) === name.toUpperCase()})
}

function matchName(ds, name) {
  return ds.filter(function (e) {return e.name.toUpperCase() === name.toUpperCase()})
}
