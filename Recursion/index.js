function countDown(num) {
  if(num === 0) {
    console.log('Number is zero')
    return
  }
  console.log(num)
  num--
  countDown(num)
}

countDown(10)