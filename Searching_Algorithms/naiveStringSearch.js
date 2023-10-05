function srtingSearchCount(str, substr) {
  let count = 0
  for (let i=0; i< str.length; i++) {
    for (let j=0; j< substr.length; j++) {
      if(str[i+j] !== substr[j]) break

      else if(j === substr.length - 1) count++
    }
  }
  return count
}

let s = 'wowomgzomg'
let ss = 'omg'
console.log(srtingSearchCount(s, ss))