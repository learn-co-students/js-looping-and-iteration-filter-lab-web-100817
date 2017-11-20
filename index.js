// Code your solution in this file
function findMatching(drivers, driver){return drivers.filter(person => person.toLowerCase()=== driver.toLowerCase())};

function fuzzyMatch(drivers, string){return drivers.filter(driver => driver.slice(0,1) === string.slice(0,1))}

function matchName(drivers, string){return drivers.filter(driver => driver.name === string)}
