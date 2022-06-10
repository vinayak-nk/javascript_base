const nums = [1, 2, 3, 5, 8, 4, 2, 5, 9]
const alphs = ['b', 'e', 'd', 'a', 'f', 'c']

const descOrder = nums.sort((a, b) => a > b ? -1 : 1)
console.log(descOrder)

const ascOrder = alphs.sort((a, b) => a > b ? 1 : -1)
console.log(ascOrder)


const numsOfArray = Array.of(1, 2, 3, 4, 5)
console.log("numsOfArray=", numsOfArray)

const fromArray = Array.from("vinayak")
console.log(fromArray)