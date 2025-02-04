/*
  head - first node
  tail - last node
  length - no. of nodes
*/

class Node {
  constructor(val) {
    this.val = val
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  isEmpty = () => this.length === 0
  
  push(val) {
    var newNode = new Node(val)

    if (this.isEmpty()) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.prev = this.tail
      this.tail.next = newNode
      this.tail = newNode
    }

    this.length++;
    return this
  }

  //remove node at the end of the list
  pop() {
    if (this.isEmpty()) return undefined // No nodes present // (!this.head) //(!this.tail)

    let lastNode = this.tail    
    if (this.length === 1) this.head = this.tail = null
    else {
      this.tail = lastNode.prev
      this.tail.next = null
    }
    lastNode.prev = null

    this.length--;
    return lastNode
  }

  //remove node from begining of the list and return node
  shift() {
    if (this.isEmpty()) return undefined

    let firstNode = this.head
    if (this.length === 1) this.head = this.tail = null
    else {
      this.head = firstNode.next
      this.head.prev = null
      firstNode.next = null
    }
    this.length--;



    return firstNode
  }

  //Add node at begining of the list
  unshift(val) {
    let newNode = new Node(val)

    if (this.isEmpty()) this.head = this.tail = newNode
    else {
      let currentHead = this.head
      currentHead.prev = newNode
      newNode.next = currentHead
      this.head = newNode
    }
    this.length++;
    return this;
  }

  // Get element at the index.
  get(index) {
    if (this.isEmpty() || index >= this.length) return null

    let counter = 0
    let currentNode = this.head
    if (index <= this.length/2) {
      while(counter <= index) {
        currentNode = currentNode.next
        counter++;
      }      
    } else {
      currentNode = this.tail
      counter = this.length - 1
      while(counter > index) {
        currentNode = currentNode.prev
        counter--;
      }
    }
    return currentNode
  }

  //Set value at the index received
  set(value, index) {
    let foundNode = this.get(index)
    if (foundNode) {
      foundNode.val = value
      return true
    } else return false
  }

  // insert new value at the specified index
  insertAtIndex(val, index) {
    if (this.length < 0 || index > this.length) return false
    else if (index === this.length) return !!this.push(val)
    else if (index === 0) return !!this.unshift(val)
    else {
      let prevNode = this.get(index - 1)
      let nextNode = prevNode.next
      let newNode = new Node(val)

      prevNode.next = newNode
      nextNode.prev = newNode
      newNode.prev = prevNode
      newNode.next = nextNode


      this.length++;
      return true;
    }
  }

  removeAtIndex(index) {
    if (this.isEmpty() || index >= this.length) {
      return false
    }
    else if (index === 0) return this.shift(index)
    else if (index === this.length - 1) return this.pop()
    else {
      let removedNode = this.get(index)
      let prevNode = removedNode.prev
      let nextNode = removedNode.next
      
      prevNode.next = nextNode
      nextNode.prev = prevNode
      removedNode.next = removedNode.prev = null

      this.length--;
      return removedNode;
    }
  }

  reverse() {
    let currentNode = this.head
    let nextNode = null
    let prevNode = null
    this.head = this.tail
    this.tail = currentNode

    while(currentNode) {
      nextNode = currentNode.next
      currentNode.next = prevNode
      prevNode = currentNode
      currentNode = nextNode
   }
    return this
  }
}

var list = new DoublyLinkedList()
list.push('2')
list.push('4')
console.log(list)
list.pop()
console.log(list)
list.shift()
console.log(list)
