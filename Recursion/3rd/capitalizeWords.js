// Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.

function capitalizedWords(arr) {
  if(arr.length === 0) return ''

  let newArr = []
  newArr.push(arr[0].toUpperCase())

  for (let i of arr) return newArr = newArr.concat(capitalizedWords(arr.slice(1)))

  return newArr
}


let words = ['i', 'am', 'learning', 'recursion']
console.log(capitalizedWords(words)) // ['I', 'AM', 'LEARNING', 'RECURSION']
