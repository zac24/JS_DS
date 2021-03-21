 /**
  * 1. Maximum Sum Subarray of Size K (easy)
  * 
  * Given an array of positive numbers and a positive number ‘k’, 
  * find the maximum sum of any contiguous subarray of size ‘k’.
  
Example 1:

Input: [2, 1, 5, 1, 3, 2], k=3 
Output: 9
Explanation: Subarray with maximum sum is [5, 1, 3].
Example 2:

Input: [2, 3, 4, 1, 5], k=2 
Output: 7
Explanation: Subarray with maximum sum is [3, 4].

 */

 function maxSumSubArray(input, k){
    var start = 0
    var max = 0 
    var sum = 0
    for (let end = 0; end < input.length; end++){
         sum += input[end]
         if(end - start + 1 >= k){
             max = Math.max(max, sum)
             sum -= input[start]
             start += 1
         }
    }
    return max
 }

 console.log('The max sum of SubArray of size K', maxSumSubArray([2, 1, 5, 1, 3, 2], 3))
 console.log('The max sum of SubArray of size K', maxSumSubArray([2, 3, 4, 1, 5], 2))