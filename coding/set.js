const set = new Set([1, 2, 3, 3])
set.add(4)
set.add(4) // ignored as it is not unique
set.delete(3)

for (const item of set) console.log(item)

console.log(set.has(4))
console.log('size', set.size)

set.clear()

console.log('size', set.size)