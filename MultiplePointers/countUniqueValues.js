// set
const CountUniqueValues = (arr) => new Set(arr).size

// Array methods
function CountUniqueValues2(arr) {
  let f = []
  for (let i of arr) if(f.indexOf(i) === -1) f.push(i)
  return f.length
}

// Pointers
function CountUniqueValues3(arr) {
  let i = 0;
  for (let j = i+1; j < arr.length; j++) {
    if(arr[i] !== arr[j]) {
      i++
      arr[i] = arr[j]
      console.log('i=',i, ' j=', j, 'array=',arr.join(''))
    }
  }
  console.log('array=', arr)
  return i+1
}

let a = [1,1,1,1,1,2] // 2 -> 1,2
let b = [1,2,3,4,4,4,7,7,12,12,13] // 7 -> 1,2,3,4,7,12,13
let c = [] // 0
let d = [-2, -1, -1, 0, 1] // 4 -> -2, -1, 0, 1

console.log(CountUniqueValues3(b))

