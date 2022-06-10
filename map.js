const items = [
  { itemName: 'tv', itemPrice: 100 },
  { itemName: 'bike', itemPrice: 100 },
  { itemName: 'car', itemPrice: 1000 },
  { itemName: 'phone', itemPrice: 50 },
  { itemName: 'laptop', itemPrice: 50 },
  { itemName: 'bus', itemPrice: 100 },
  { itemName: 'tab', itemPrice: 30 },
  { itemName: 'pen', itemPrice: 10 },
]

console.log(items.length)

const newArray = items.map((item) => item.itemName)

console.log(newArray)

// items.forEach((items) => console.log(items.itemName))

const arr = [1, 2, 3, 4, 5, 6]
const mapArr = arr.map((x) => x+2 )
const filerArr = arr.filter((x) => x > 2)
console.log('original=', arr)
console.log('map', mapArr)
console.log('filter', filerArr)