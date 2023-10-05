// Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return -1.


function binarySearch(arr, num){
  let start = 0
  let end = arr.length - 1
  let mid = Math.floor((start+end)/2)

  while(arr[mid] !== num && start<=end) {
    if(num < arr[mid]) end = mid - 1
    else start = mid + 1
    
    mid = Math.floor((start+end)/2)
  }

  return arr[mid] === num ? mid : -1
}

console.log("index=", binarySearch([1,2,3,4,5],4)) // 1
console.log("index=", binarySearch([1,2,3,4,5],3)) // 2
console.log("index=", binarySearch([1,2,3,4,5],5)) // 4
console.log("index=", binarySearch([1,2,3,4,5],6)) // -1
console.log("index=", binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 10)) // 2
console.log("index=", binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 95)) // 16
console.log("index=", binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 100)) // -1