function bubblesort(arr) {
  for(let i=0; i< arr.length; i++) {
    for(let j=0; j<arr.length; j++) {
      // console.log(arr[j], arr[j+1], arr)
      if (arr[j] > arr[j+1]) [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
    }
    console.log(arr)
  }
  return arr
}

function bubblesort2(arr) {
  for (let i=arr.length; i>0; i--) {
    for (let j=0; j<i-1; j++) {
      console.log(arr[j], arr[j+1], arr)
      if (arr[j] > arr[j+1]) [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
    }
    // console.log(arr)
  }
  return arr
}

function bubblesort3(arr) {
  var noswaps
  for (let i=arr.length; i>0; i--) {
    noswaps = true
    for (let j=0; j<i-1; j++) {
      console.log(arr[j], arr[j+1], arr)
      if (arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
        noswaps = false
      }
    }
    if(noswaps) break
    // console.log(arr)
  }
  return arr
}

var a = [13, 4, 9, 10, 11, 1]
var b = [8 ,1,2,3,4,5,6,7]
console.log(bubblesort3(b))
