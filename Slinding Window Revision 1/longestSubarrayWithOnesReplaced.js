// Given an array containing 0s and 1s, if you are allowed to replace no more than ‘k’ 0s with 1s, find the length of the longest contiguous subarray having all 1s.

/**
 * 
 * Example 1:

Input: Array=[0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], k=2
Output: 6
Explanation: Replace the '0' at index 5 and 8 to have the longest contiguous subarray of 1s having length 6.
Example 2:

Input: Array=[0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], k=3
Output: 9
Explanation: Replace the '0' at index 6, 9, and 10 to have the longest contiguous subarray of 1s having length 9.
 * 
 */

// Solution 

function longestSubarrayWithOnesAfterReplacement(input, k){
    var start = 0
    var maxOnes = 0 
    var maxLength = 0
    for(let end = 0; end < input.length; end++){
        const rightElement = input[end]

        if(rightElement === 1){
            maxOnes += 1
        }

        if(((end - start + 1) - maxOnes) > k){
            const leftElement = input[start]
            if(leftElement === 1){
                maxOnes -= 1
            }
            start += 1
        }
    
        maxLength = Math.max(maxLength, end - start + 1)
    }
    return maxLength
}

let input = [0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1]
let k = 2

let input1 = [0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1]
let k1 = 3

console.log("The longest SubarrayWithOnesReplaced ====>", longestSubarrayWithOnesAfterReplacement(input, k))
console.log("The longest SubarrayWithOnesReplaced ====>", longestSubarrayWithOnesAfterReplacement(input1, k1))
