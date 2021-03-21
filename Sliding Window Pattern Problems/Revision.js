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

 /*
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
 */




//  ====================================================================================

/**
 * Smallest Subarray with a given sum (easy)
 * 
 * 
Problem Statement #
Given an array of positive numbers and a positive number ‘S’, find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0, if no such subarray exists.

Example 1:

Input: [2, 1, 5, 2, 3, 2], S=7 
Output: 2
Explanation: The smallest subarray with a sum great than or equal to '7' is [5, 2].
Example 2:

Input: [2, 1, 5, 2, 8], S=7 
Output: 1
Explanation: The smallest subarray with a sum greater than or equal to '7' is [8].
Example 3:

Input: [3, 4, 1, 1, 6], S=8 
Output: 3
Explanation: Smallest subarrays with a sum greater than or equal to '8' are [3, 4, 1] or [1, 1, 6].

 */

 function smallestSubArrayOfGivenSum(input, k){
    var start = 0 
    var length = 0
    var sum = 0
    for(let end = 0; end < input.length; end ++){
        sum += input[end]

        if(sum >= k){
            length = end- start 
            sum -= input[start]
            start += 1
        }
    }
    return length
 }

 console.log('The smallest SubArray of given sum', smallestSubArrayOfGivenSum([2, 1, 5, 2, 3, 2], 7))
 console.log('The smallest SubArray of given sum', smallestSubArrayOfGivenSum([2, 1, 5, 2, 8], 7))
 console.log('The smallest SubArray of given sum', smallestSubArrayOfGivenSum([3, 4, 1, 1, 6], 8))
 