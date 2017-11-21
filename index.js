
function findMatching (drivers, name) {
  return drivers.filter(function(driver){
    return driver.toLowerCase() === name.toLowerCase();
  });
}


function fuzzyMatch (drivers, name) {
  return drivers.filter(function(driver){
    return driver[0] === name[0];
  });
}

function matchName (drivers, name) {
  return drivers.filter(function(driver){
    return driver.name === name;
  });
}

const allDrivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah'];

console.log(findMatching(allDrivers, 'Sally'))

hash = [
  {
    name: 'Bobby',
    hometown: 'Pittsburgh'
  },
  {
    name: 'Matt',
    hometown: 'Tampa Bay'
  }
]

  console.log(hash[0]['name'])
