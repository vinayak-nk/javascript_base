const a1 = [1, 2, 3, 4, 5, 5]
const a2 = ['a', 'b', 'c']

// console.log(a1.concat(a2))
// console.log(a1.join(':'))
// console.log(a1.slice(2, 5))
// console.log(a1.indexOf(5))
// console.log(a1.lastIndexOf(5))


// console.log('map', a1.map(Math.sqrt))
// a1.forEach((item) => console.log(item))
// console.log('every', a1.every((item) => item < 5))
// console.log('some', a1.some((item) => item < 5))
// console.log('filter', a1.filter((item) => item > 3))
// console.log('find', a1.find(item => item > 4 ))
// console.log('findIndex', a1.findIndex(item => item > 4 ))
// console.log('indexOf', a1.indexOf(5))

// console.log('from', Array.from("12 3 "))
// console.log('isArray', Array.isArray(a1))

// console.log('reverse', a1.reverse())

// console.log('slice +VE', a1.slice(0, 3))
// console.log('slice -VE', a1.slice(-5))

// console.log(a1.sort((a, b) => b-a))

console.log(a1.toString())
console.log(a2.toLocaleString())

console.log('reduce--', a1.reduce((total, num) => {return total - num}, 0 ))
console.log('reduceRight--', a1.reduceRight((total, num) => {return total - num}, 0 ))

