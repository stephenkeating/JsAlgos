function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}


// working on the implementation of radixSort
function radixSort(arr) {
  let maxDigits = mostDigits(arr)
  let sortedArr = []
  for (let i = 0; i < maxDigits; i++) {
    for (let j = 0; j < arr.length; j++) {
      let digit = getDigit(arr[j]) 
      sortedArr[digit] = arr[j]
    }
    // concat the subarrays
  }
  return sortedArr
}