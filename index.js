// Code your solution in this file
function findMatching(drivers, string) {
  driver_name = []
  for (const driver of drivers) {
    // console.log(driver);
    if (driver === string || driver.toLowerCase() === string.toLowerCase()) {
      driver_name.push(driver)
    }
  }
// console.log(driver_name);
  return driver_name
}

function fuzzyMatch(drivers, string) {
  return_array = []
  for (driver of drivers) {
    // console.log(driver);
    // console.log(driver.startsWith(string));
    if (driver.startsWith(string)) {
      return_array.push(driver)
    }
  }
  return return_array
}

function matchName(drivers, string) {
  return_array =[]
  // console.log(drivers);
  for (driver of drivers) {
    // console.log(driver);
    if (driver.name === string) {
      // console.log(driver.name);
      return_array.push(driver)
    }
  }
  // console.log(return_array);
  return return_array
}
