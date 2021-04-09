// Given an array of positive numbers and a positive number ‘k’, find the maximum sum of any contiguous subarray of size ‘k’.

// Example 1:

// Input: [2, 1, 5, 1, 3, 2], k=3 
// Output: 9
// Explanation: Subarray with maximum sum is [5, 1, 3].
// Example 2:

// Input: [2, 3, 4, 1, 5], k=2 
// Output: 7
// Explanation: Subarray with maximum sum is [3, 4].

// ======================= Solution ===========================

function maxSumOfSubArray(input, k){
    var start = 0 
    var sum = 0 
    var maxSum = 0
    for(let end = 0; end < input.length; end++){
        let right = input[end]
        sum += right 
        if(end  >= k - 1){
            maxSum = Math.max(maxSum, sum)
            sum -= input[start]
            start += 1
        }
    }
    return maxSum
}

let input1 = [2, 1, 5, 1, 3, 2]
let k1 = 3

let input2 = [2, 3, 4, 1, 5] 
let k2 = 2

console.log("1==========>", maxSumOfSubArray(input1, k1))
console.log("2==========>", maxSumOfSubArray(input2, k2))