/*
  FIFO
  use cases
    1. background tasks
    2. printing / task processing
    3. uploading
*/

let queue = []

queue.push(1)
queue.push(2)
queue.push(3)

queue.shift()
queue.shift()
queue.shift()

// OR

queue.unshift(1)
queue.unshift(2)
queue.unshift(3)

queue.pop()
queue.pop()
queue.pop()