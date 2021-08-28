/**
Problem Statement #

Given an array of positive numbers and a positive number ‘k’, 
find the maximum sum of any contiguous subarray of size ‘k’.
    
Example 1:
Input: [2, 1, 5, 1, 3, 2], k=3 
Output: 9
Explanation: Subarray with maximum sum is [5, 1, 3].

Example 2:
Input: [2, 3, 4, 1, 5], k=2 
Output: 7
Explanation: Subarray with maximum sum is [3, 4]. 
*/

function maxSumSubarray(inputArr, k) {
    var maxSum = 0 
    var sum = 0
    var start = 0 
    for (var end = 0; end < inputArr.length; end++){
         sum += inputArr[end]
        if (k === end - start +1){
            maxSum = Math.max(sum, maxSum)
            sum = sum - inputArr[start]
            start += 1 
        }
    }

    return maxSum
}

let input = [2, 1, 5, 1, 3, 2], k=3 
let input1 = [2, 3, 4, 1, 5], k1=2 

console.log("The maximum sum of contiguous subarray of size", maxSumSubarray(input, k))
console.log("The maximum sum of contiguous subarray of size", maxSumSubarray(input1, k1))