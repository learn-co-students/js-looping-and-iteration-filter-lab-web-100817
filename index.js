function findMatching (array, string) {
  return array.filter(function (word) { return word.toLowerCase() === string.toLowerCase() })
}

function fuzzyMatch (array, string) {
  return array.filter(function (word) {
    return word.slice(0, string.length) === string
  })
}

function matchName (array, string) {
  return array.filter(function (word) { return word['name'] === string })
}
