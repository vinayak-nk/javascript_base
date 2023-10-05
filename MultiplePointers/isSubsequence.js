// Write a function called isSubsequence which takes in two strings and checks whether the characters in the 
// first string form a subsequence of the characters in the second string. 
// In other words, the function should check whether the characters in the first string appear somewhere 
// in the second string, without their order changing.

// Your solution MUST have AT LEAST the following complexities:
// Time Complexity - O(N + M)
// Space Complexity - O(1)

function isSubsequence(s1, s2) {
  let i = 0
  let j = 0

  while(j < s2.length) {
    if (s1[i] === s2[j]) {
      i++
      if(i === s1.length) return true
    }
    console.log('j=', s2[j])
    j++
  }
  return false
}

console.log(isSubsequence('ello', 'hell world')) // true
console.log(isSubsequence('sing', 'sting')) // true
console.log(isSubsequence('abc', 'abracadabra')) // true
console.log(isSubsequence('abc', 'acb')) // false (order matters)
