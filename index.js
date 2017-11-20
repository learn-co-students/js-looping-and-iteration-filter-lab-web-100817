// Code your solution in this file
function findMatching(array, string) {
  return array.filter( function (word) { return word.toLowerCase() == string.toLowerCase()});
}

function fuzzyMatch(array, string) {
  return array.filter( function (word) {return word[0] === string[0]})
}

function matchName(array, string) {
  return array.filter( function (word) { return word.name === string})
}
