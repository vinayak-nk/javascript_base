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

let total = items.reduce((currentValue, item) => {
  return item.itemPrice + currentValue
}, 0)

console.log("total=", total)

total = items.reduce((currentValue, item) => (item.itemPrice + currentValue), 0)
console.log("total=", total)

total = items.reduce((currentValue, item) => {
  if (item.itemPrice < 100) {
    return item.itemPrice + currentValue
  } else return currentValue
}, 0)
console.log("total=", total)


const arr = [1, 2, 3, 4, 5, 6]
const reduceArr = arr.reduce((prevValue, nextValue) => prevValue + nextValue, 0)
console.log("reduceArr=", reduceArr)