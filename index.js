// Code your solution in this file

function findMatching(array,name){
// return array.filter(function(element) {
//     return element.toLowerCase() === name.toLowerCase();
// });
// or
  return array.filter(element => element.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch(array,string){
  return array.filter(function(element){
    return element.toLowerCase().slice(0,2).includes(string.toLowerCase())})
}

function matchName(array,name){
  return array.filter(function(element){
    return element.name.toLowerCase() === name.toLowerCase()
  })
}
