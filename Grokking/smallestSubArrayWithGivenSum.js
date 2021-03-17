// Smallest Subarray with a given sum

// Problem Statement #
// Given an array of positive numbers and a positive number ‘S’, find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0, if no such subarray exists.

// Example 1:

// Input: [2, 1, 5, 2, 3, 2], S=7 
// Output: 2
// Explanation: The smallest subarray with a sum great than or equal to '7' is [5, 2].
// Example 2:

// Input: [2, 1, 5, 2, 8], S=7 
// Output: 1
// Explanation: The smallest subarray with a sum greater than or equal to '7' is [8].
// Example 3:

// Input: [3, 4, 1, 1, 6], S=8 
// Output: 3
// Explanation: Smallest subarrays with a sum greater than or equal to '8' are [3, 4, 1] or [1, 1, 6].


// ======================= Window Sliding Approach ========================

function smallestSubWithSum(arr, target) {
    
    var minLength = Infinity 
    var subArraySum = 0
    let start = 0 
    for (let end = 0; end < arr.length; end++){
        subArraySum += arr[end]
        while(subArraySum >= target){
            minLength = Math.min(minLength, end - start + 1)
            subArraySum -= arr[start]
            start += 1
        }
    }
    if (minLength === Infinity){
        minLength = 0
    }
    return minLength
}

let inputArray = [2, 1, 5, 2, 3, 2]
let S=7 

console.log('The smallest subArray with given sum', smallestSubWithSum(inputArray, S))

