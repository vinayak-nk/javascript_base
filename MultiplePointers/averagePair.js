// Write a function called averagePair. Given a sorted array of integers and a target average, 
// determine if there is a pair of values in the array where the average of the pair equals the target average. 
// There may be more than one pair that matches the average target.

// Bonus Constraints: // Time: O(N) // Space: O(1)

function averagePair(arr, avg) {
  let len = arr.length

  for(let i=0; i< len; i++) {
    for(let j=i+1; j< len; j++) {
      if (((arr[i] + arr[j]) /2 ) === avg) return [arr[i], arr[j]]
    }
  }
  return []
}

// multiple pointers
function averagePair2(arr, avg) {
  let len = arr.length

  let left = 0
  let right = arr.length - 1

  while(left < right) {
    let a = (arr[left] + arr[right]) / 2
    if(a === avg) return [arr[left], arr[right]]
    else if(a < avg) left +=1
    else right -=1
  }
  return []
}

console.log(averagePair2([1,2,3],2.5)) // true
console.log(averagePair2([1,3,3,5,6,7,10,12,19],8)) // true
console.log(averagePair2([-1,0,3,4,5,6], 4.1)) // false
console.log(averagePair2([],4)) // false
