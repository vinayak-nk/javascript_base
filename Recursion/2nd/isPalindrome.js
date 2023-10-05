// Write a recursive function called isPalindrome which returns true if the 
// string passed to it is a palindrome (reads the same forward and backward). 
// Otherwise it returns false.

const isPalindrome = (str) => str === str.split('').reverse().join('')

function isPalindrome_R(str){
  let len = str.length

  if (len <=1 || (len === 2 && str[0] === str[len-1])) return true
  if(str[0] !== str[len-1]) return false

  return isPalindrome(str[1, len-1])
}

console.log(isPalindrome('gadag')) // true
console.log(isPalindrome('madam')) // true
console.log(isPalindrome('foobar')) // false
console.log(isPalindrome('tacocat')) // true
console.log(isPalindrome('amanaplanacanalpanama')) // true
console.log(isPalindrome('amanaplanacanalpandemonium')) // false
