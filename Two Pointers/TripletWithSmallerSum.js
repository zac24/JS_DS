/**
 * 
 * Triplets with Smaller Sum (medium)
 * 
 * Given an array arr of unsorted numbers and a target sum, count all triplets in it such that arr[i] + arr[j] + arr[k] < target where i, j, and k are three different indices. Write a function to return the count of such triplets.

Example 1:

Input: [-1, 0, 2, 3], target=3 
Output: 2
Explanation: There are two triplets whose sum is less than the target: [-1, 0, 3], [-1, 0, 2]
Example 2:

Input: [-1, 4, 2, 1, 3], target=5 
Output: 4
Explanation: There are four triplets whose sum is less than the target: 
   [-1, 1, 4], [-1, 1, 3], [-1, 1, 2], [-1, 2, 3]
 * 
 */


function tripletWithSmallerSum(inputArr, target) {
  console.log('==========>', inputArr)
    var triplets = 0
    var input = inputArr.sort()
    for (let i = 0; i < input.length - 2; i++){
      var left = i+1
      var right = input.length - 1

      while (left < right){
        var currentSum = input[i] + input[left] + input[right]
        if(currentSum < target) {
          triplets += right - left
          left += 1
        }else {
          right -= 1
        }
      }
    }
    return triplets
}

console.log('the number of triplets with smaller sum are ====>', tripletWithSmallerSum([-1, 0, 2, 3], 3))
console.log('the number of triplets with smaller sum are ====>', tripletWithSmallerSum([-1, 4, 2, 1, 3], 5))