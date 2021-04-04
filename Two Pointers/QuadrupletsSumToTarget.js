/**
 * Title: Quadruple Sum to Target
 * 
 * Given an array of unsorted numbers and a target number, find all unique quadruplets in it, whose sum is equal to the target number.

Example 1:

Input: [4, 1, 2, -1, 1, -3], target=1
Output: [-3, -1, 1, 4], [-3, 1, 1, 2]
Explanation: Both the quadruplets add up to the target.
Example 2:

Input: [2, 0, -1, 1, -2, 2], target=2
Output: [-2, 0, 2, 2], [-1, 0, 1, 2]
Explanation: Both the quadruplets add up to the target.
 */

function quadrupletsSumToTarget(inputArr, target) {
    var resultArray = []
    let input = inputArr.sort()

    for(let i = 0; i < input.length - 3; i++){
        if(i > 0 && input[i-1] === input[i]){
            continue
        }
        for(let j = i + 1; j < input.length - 2; j++) {
            if(j > i+1 && input[j-1] === input[j]){
                continue
            }
            search_pair(input, i, j, target, resultArray)
        }
    }
    return resultArray
}

function search_pair (input, first, second, target, resulArray) {
    var left = second + 1
    var right = input.length - 1

    while(left < right){
        let currentSum = input[first] + input[second] + input[left] + input[right]

        if(currentSum === target){
            resulArray.push([input[first], input[second], input[left], input[right]])
            left += 1
            right -= 1

            while(left < right && input[left] === input[left-1]){
                left += 1
            }
            while(left < right && input[right] === input[right+1]){
                right -= 1
            }
        }else if(currentSum < target){
            left += 1
        }else {
            right -= 1
        }
    }
}

console.log('Quadruplets whose sum are equal to target =====>', quadrupletsSumToTarget([4, 1, 2, -1, 1, -3], 1))
console.log('Quadruplets whose sum are equal to target =====>', quadrupletsSumToTarget([2, 0, -1, 1, -2, 2], 2))