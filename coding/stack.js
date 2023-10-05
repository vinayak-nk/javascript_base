// LIFO
// push -> add element to the top
// pop -> remove element from top
// peek -> Get the value of top element without removing instanceof
// isEmpty ->
// size()

class Stack {
  constructor() {
    this.items = []
  }

  push = (el) => this.items.push(el)
  pop = () => this.items.pop()
  peek = () => console.log('Last=',this.items[this.items.length - 1])
  isEmpty = () => this.items.length === 0
  size = () => console.log('Size=', this.items.length)
  print = () => console.log(this.items)
}

var s = new Stack()
s.push(2)
s.push(3)

s.peek()
s.size()
s.pop()
s.print()