/*
  LIFO
  use cases
    1. Managing fn invocations
    2. Undo / Redo
    3. Routing / history
*/

/*
  push, pop ->      O(1)
  unshift, shift -> O(n)
*/

let stack = []


stack.push(10)
stack.push(20)
stack.push(30)

stack.pop()


// OR

stack.unshift(1)
stack.unshift(2)
stack.unshift(3)

stack.unshift()