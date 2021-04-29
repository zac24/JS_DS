// Given an array nums with n integers, your task is to check if it could become non-decreasing by modifying at most one element.

// We define an array is non-decreasing if nums[i] <= nums[i + 1] holds for every i (0-based) such that (0 <= i <= n - 2).

/**
 *
 * Example 1:

Input: nums = [4,2,3]
Output: true
Explanation: You could modify the first 4 to 1 to get a non-decreasing array.
Example 2:

Input: nums = [4,2,1]
Output: false
Explanation: You can't get a non-decreasing array by modify at most one element. 
 * 
 */

// Solution

function nonDecreasing(input){
    var left = 0 
    var nonDecreasingCount = 0 

    for(let i = 1; i < input.length; i++){
        const element = input[i]

        if(input[left] > element){
            nonDecreasingCount += 1
        }
        if(nonDecreasingCount > 1){
            return false 
        }
        left += 1
    }
    return true 
}

let input = [4,2,3]
let input1 = [4,2,1]
let input2 = [3,4,2,3]

console.log("Array will be nondecreasing?? ====>", nonDecreasing(input))
console.log("Array will be nondecreasing?? ====>", nonDecreasing(input1))
console.log("Array will be nondecreasing?? ====>", nonDecreasing(input2))// Solution is incorrect for this input, come back and fix it. 
