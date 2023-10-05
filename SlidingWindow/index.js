//Sliding window
// creating a window from one position to another
// Depending on certain CSSConditionRule, window either increases or closes(a new window created)
// tracking subset of an array or string 
// Ex: langest sequence of unique char's in a string
// Ex: maxSubarray SubmitEvent. max sum of n consecutive nums

//my method
function maxSubarraySum(arr, num) {
  let maxSum = 0
  for(let i =0; i<=arr.length-num; i++) {
    let tempSum = 0
    for (j=i; j< i+num; j++) tempSum += arr[j]
   
    maxSum = maxSum > tempSum ? maxSum : tempSum
  }
  return maxSum
}

// sliding window
function maxSubarraySum2(arr, num) {
  let maxSum = 0
  let tempSum = 0
  for(let i=0; i<num; i++) maxSum += arr[i]

  for(let i=num; i<arr.length; i++) {
    tempSum = maxSum - arr[i-num] + arr[i]
    maxSum = Math.max(maxSum, tempSum)
  }

  return maxSum
}

let a = [1,2,5,2,8,1,5] // c=2 -> 8+2=10
let b = [1,2,5,2,8,1,5] // c=4 -> 2+5+2+8=17
let c = [4,2,1,6] // c=1 -> 6
let d = [4,2,1,6,2] // c=4 -> 4+2+1+6=13

console.log(maxSubarraySum2(d, 4))