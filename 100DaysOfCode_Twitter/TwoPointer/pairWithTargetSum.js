/***
 * 
 * Given an array of sorted numbers and a target sum, 
 * find a pair in the array whose sum is equal to the given target.
 * 
Example 1:
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

function pairWithTargetSum(inputArr, target) {
var sum = 0 
var result = []
var left = 0
var right = inputArr.length - 1
while(right > left){
    sum = inputArr[left] + inputArr[right]
    if(sum === target){
        result.push(left, right)
    }
    if(sum > target){
        right --
    }else {
        left ++
    }
}
return result
}

let input = [1, 2, 3, 4, 6], target=6
let input1 = [2, 5, 9, 11], target1=11

console.log(`pair of target sum for ${input} with target ${target} is`, pairWithTargetSum(input, target))
console.log(`pair of target sum for ${input1} with target ${target1} is`, pairWithTargetSum(input1, target1))