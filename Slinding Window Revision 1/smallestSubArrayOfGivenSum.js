// Given an array of positive numbers and a positive number ‘S’, 
// find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. 
// Return 0, if no such subarray exists.


/**
 * 
 * Example 1:

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
 * 
 * 
 */


function smallestSubArrayOfGivenSum(input, s){
    var start = 0
    var sum = 0 
    var smallestSubArrCount = Infinity

    for (let end = 0; end < input.length; end++) {
        const right = input[end];
        sum += right 

        while(sum >= s) {
            smallestSubArrCount = Math.min(smallestSubArrCount, end - start + 1)
            sum -= input[start]
            start += 1
        }
    }
    return smallestSubArrCount > 0 ? smallestSubArrCount : 0 

}

let input1 = [3, 4, 1, 1, 6]
let S1 = 8

let input2 = [2, 1, 5, 2, 8]
let S2 = 7 

let input3 = [2, 1, 5, 2, 3, 2]
let S3 = 7 

console.log("==================>", smallestSubArrayOfGivenSum(input1, S1))
console.log("==================>", smallestSubArrayOfGivenSum(input2, S2))
console.log("==================>", smallestSubArrayOfGivenSum(input3, S3))