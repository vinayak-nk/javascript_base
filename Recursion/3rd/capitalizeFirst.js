// Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.

function capitalizeFirst(arr) {
  if (arr.length === 1) return arr[0].split('')[0].toUpperCase() + arr[0].slice(1)

  let newArray = []
  newArray.push(arr[0].split('')[0].toUpperCase() + arr[0].slice(1))

  for (let i of arr) return newArray = newArray.concat(capitalizeFirst(arr.slice(1)))

  return newArray
}

console.log(capitalizeFirst(['car','taco','banana'])) // ['Car','Taco','Banana']

