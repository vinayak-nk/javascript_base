// Write a recursive function called reverse which accepts a string and returns a new string in reverse.

//reverse, join method
function reverse_A(str){
  return str.split('').reverse().join('')
}

function reverse_R(str){
  let len = str.length
  if(len === 0) return ''
  return str[len-1] + reverse_R(str.slice(0, len-1))
}

console.log(reverse_R('awesome')) // 'emosewa'
console.log(reverse_R('rithmschool')) // 'loohcsmhtir'
