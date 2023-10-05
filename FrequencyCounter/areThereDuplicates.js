// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and 
// checks whether there are any duplicates among the arguments passed in. 
// You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Examples:

// using frequency method
function areThereDuplicates() {
  let f1 = {}
  for(let i of arguments) {
    if (f1.hasOwnProperty(i)) return true
    f1[i] += 1
  }  
  return false
}

// set method
function areThereDuplicates2() {
  return new Set(arguments).size !== arguments.length
}

console.log(areThereDuplicates2(1, 2, 3)) // false
console.log(areThereDuplicates2(1, 2, 2)) // true
console.log(areThereDuplicates2('a', 'b', 'c', 'a')) // true