// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

/**
 * Example 1:

Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
Example 2:

Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
Example 3:

Input: nums = [3,1,2,10,1]
Output: [3,4,6,16,17]
 *
 */

// Solution: 

function runningSumOfArray(input){
    var resultArray = []
    var sum = 0
    for(let end = 0; end < input.length; end++){
        const element = input[end]
        sum += element
        resultArray.push(sum)
    }

    return resultArray
}

let input = [1,2,3,4]

let input1 = [1,1,1,1,1]

let input2 = [3,1,2,10,1]

console.log("The running sum of an array ====>", runningSumOfArray(input))
console.log("The running sum of an array ====>", runningSumOfArray(input1))
console.log("The running sum of an array ====>", runningSumOfArray(input2))

