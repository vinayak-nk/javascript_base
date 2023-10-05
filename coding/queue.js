// FIFO
class Queue {
  constructor() {
    this.items = []
  }

  enqueue = (el) => this.items.push(el)
  dequeue = () => this.items.shift() // shift method removes and returns from the begining of an array
  peek = () => this.isEmpty() ? console.log('Empty') : console.log('First=',this.items[0])
  isEmpty = () => this.items.length === 0
  size = () => console.log('Size=', this.items.length)
  print = () => console.log(this.items.toString())
}

var q = new Queue()

console.log(q.isEmpty() ? 'Empty' : 'Not Empty')

q.enqueue(1)
q.enqueue(10)
q.enqueue(20)
q.enqueue(30)

q.print()
q.dequeue()
q.peek()
q.print()
