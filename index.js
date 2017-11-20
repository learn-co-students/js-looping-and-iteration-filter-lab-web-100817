// Code your solution in this file
function findMatching(driver, string) {
	const returnDrivers = []
	for (const word of driver) {
		if (word.toLowerCase() === string.toLowerCase()) {
			returnDrivers.push(word)
		}
	}
	return returnDrivers
}

function fuzzyMatch(drivers, string) {
	const returnDrivers = []
	for (word of drivers) {
		if (word.startsWith(string)) {
			returnDrivers.push(word)
		}
	}
	return returnDrivers
}

function matchName(drivers, string) {
	const returnDrivers = []
	for (driver of drivers) {
		if (driver.name === string) {
			returnDrivers.push(driver)
		}
	}
	return returnDrivers
}
