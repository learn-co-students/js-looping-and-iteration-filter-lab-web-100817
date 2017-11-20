// Code your solution in this file
function findMatching(drivers, string) {
  const answer = [];
  drivers.filter(function(name) {
    if (name.toLowerCase() === string.toLowerCase()) {
      answer.push(name);
    }
  })
  return answer;
}

function fuzzyMatch(drivers, string) {
  const answer = [];
  drivers.filter(function(name) {
    if (name.slice(0,string.length) === string) {
      answer.push(name);
    }
  })
  return answer;
}

function matchName(drivers, string) {
  const answer = [];
  drivers.filter(function(name) {
    if (name.name === string) {
      answer.push(name);
    }
  })
  return answer;
}
