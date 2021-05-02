// Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target

/***
 * 
 * 
 * Example 1:

Input: [1, 2, 3, 4, 6], target=6
Output: [1, 3]
Explanation: The numbers at index 1 and 3 add up to 6: 2+4=6
Example 2:

Input: [2, 5, 9, 11], target=11
Output: [0, 2]
Explanation: The numbers at index 0 and 2 add up to 11: 2+9=11
 * 
 * 
 */

// Solution

function pairWithTargetSum(input, target) {

    var left = 0
    var right = input.length

    while(left < right){
        const currentSum = input[left] + input[right]

        if(target === currentSum){
            return [left, right]
        }

        if(target > currentSum){
            left += 1 
        }else {
            right -= 1
        }
    }

    return [-1, -1]

}

let input = [1, 2, 3, 4, 6]
let target = 6

let input1 = [2, 5, 9, 11]
let target1 = 11

console.log("Pair with target sum ====>", pairWithTargetSum(input, target))
console.log("Pair with target sum ====>", pairWithTargetSum(input1, target1))