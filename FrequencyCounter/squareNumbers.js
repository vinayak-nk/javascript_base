// Array1 -> Array 2 // array1 value should be squared in array2
// [1,2,3] -> [1,4,9]
function same(a, b) {
  if (a.length !== b.length) return false
  for (let i=0; i< a.length; i++) {
    let i2 = b.indexOf(a[i] ** 2)
    if(i2 === -1) return false
    b.splice(i2)
  }
  return true
}


function same2(a,b) {
  let f1 = {}
  let f2 = {}
  for (let val of a) f1[val] = (f1[val] || 0)+ 1
  for (let val of b) f2[val] = (f2[val] || 0) + 1

  for (let key in f1) {
    if(!(key ** 2 in f2)) return false
    if (f2[key ** 2] !== f1[key]) return false
  }
  return true
}

let a = [3, 4, 2, 2]
let b = [9, 4, 4, 16]
  
console.log(same2(a,b))
