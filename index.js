// Code your solution in this file
function findMatching(drivers,string){
  matching = drivers.filter(function(driver){
    return driver.toUpperCase() == string.toUpperCase()
  })
  return matching
}

function fuzzyMatch(drivers,string){
  fuzz = drivers.filter(function(driver){
    return driver[0]==string[0]
  })
  return fuzz
}

function matchName(array,string){
   match = array.filter(function(user){
    return user.name === string
  })
  return match
}
