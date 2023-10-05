// Write a function called findLongestSubstring, which accepts a string 
// and returns the length of the longest substring with all distinct characters.

function findLongestSubstring(str){
  let maxStr = []
  let longest = []

  for (let i=0; i<str.length; i++) {
    let char = str[i]
    let index = maxStr.indexOf(char)
    if(index === -1) maxStr.push(char)
    else {
      maxStr = str.split('').slice(index+1, i)
      if (longest.length < maxStr.length) {
        longest = maxStr
      }
    }
    console.log(maxStr)
  }
  return longest.length
}

// console.log(findLongestSubstring('thisisawesome')) // 6
console.log(findLongestSubstring("rithmschool")) // 7
// console.log(findLongestSubstring('')) // 0
// console.log(findLongestSubstring('thecatinthehat')) // 7
// console.log(findLongestSubstring('bbbbbb')) // 1
// console.log(findLongestSubstring('longestsubstring')) // 8
// console.log(findLongestSubstring('thisishowwedoit')) // 6
