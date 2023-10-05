let obj = {
  'x': 1,
  'y': 2,
}

console.log(obj.x)
console.log(obj['y'])

obj['z'] = 3
obj.w = 4

console.log(obj)

console.log(Object.entries(obj))
console.log(Object.keys(obj))
console.log(Object.values(obj))