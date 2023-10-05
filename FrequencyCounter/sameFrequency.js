// Write a function called sameFrequency. Given two positive integers, 
// find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities: Time: O(N)

// Sample Input:


function sameFrequency(n1, n2) {
  n1 = n1.toString()
  n2 = n2.toString()
  if(n1.length !== n2.length) return false
  let f1 = {}
  let f2 = {}
  for (let i=0; i< n1.length; i++) {
    f1[n1[i]] = (f1[n1[i]] || 0) + 1
    f2[n2[i]] = (f2[n2[i]] || 0) + 1
  }
  for (let key in f1) if(f1[key] !== f2[key]) return false

  return true
}

console.log(sameFrequency(182,281)) // true
console.log(sameFrequency(34,14)) // false
console.log(sameFrequency(3589578, 5879385)) // true
console.log(sameFrequency(22,222)) // false