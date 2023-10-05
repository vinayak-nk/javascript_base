// Creating pointers then move towards begining, end or middle based on certain condition.

// 1. sum zero
// input: sorted array with positive and negative numbers
// output: a pair whose sum is zero

// naive
function sumZero(arr) {
  let len = arr.length
  for(let i=0; i<len; i++) {
    for (let j=i+1; j<len; j++) {
      if (arr[i]+arr[j] === 0) return [arr[i], arr[j]]
    }
  }
}
// multiple pointers
function sumZero2(arr) {
  let left = 0
  let right = arr.length - 1

  while(left < right) {
    let sum = arr[left] + arr[right]
    if (sum === 0) return [arr[left], arr[right]]
    if (sum > 0) right--
    if (sum < 0) left++
  }
}

let a = [-3,-2,-1,0,1,2,3, 4] // [-3,3]
let b = [-2, 0, 1, 3] // undefined
let c = [1, 2, 3] // undefined
let d = []
console.log(sumZero2(d))