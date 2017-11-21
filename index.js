// Code your solution in this file
function findMatching (collection, name) {
  return collection.filter(function (personName) {
    return personName.toLowerCase() === name.toLowerCase()
  })
}

function fuzzyMatch (collection, startingLetters) {
  return collection.filter(function (firstTwo) {
    return firstTwo.slice(0,2).toLowerCase() === startingLetters.toLowerCase()
  })
}

function matchName (collection, name) {
  return collection.filter(function(personObj) {
    return personObj.name === name
  })
}
