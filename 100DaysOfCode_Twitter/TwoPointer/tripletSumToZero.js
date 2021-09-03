/**
 * 
 * Given an array of unsorted numbers, find all unique triplets in it that add up to zero.
 * 
Example 1:
Input: [-3, 0, 1, 2, -1, 1, -2]
Output: [-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]
Explanation: There are four unique triplets whose sum is equal to zero.

Example 2:
Input: [-5, 2, -1, -2, 3]
Output: [[-5, 2, 3], [-2, -1, 3]]
Explanation: There are two unique triplets whose sum is equal to zero.
 * 
 */

function tripletSumToZero (inputArr){
    var result = []
    var input = inputArr.sort()
    for (var i = 0; i < input.length; i++){
        if(i > 0 && input[i] === input[i-1])
        continue

        findTriplet(input, i+1, -input[i], result)
    }
    return result
}

function findTriplet(input, left, target, result){
    var right = input.length - 1
    
    while(right > left){
        var sum = input[left] + input[right]
        if (sum === target){
            result.push([-sum, input[left], input[right]])
            left += 1
            right -= 1

            while(right > left && input[left] === input[left - 1]){
                left += 1
            }
            while(right > left && input[right] === input[right - 1]){
                right -= 1  
            }
        }else if (sum > target){
            right -= 1
        }else {
            left += 1
        }
    }
}

let input = [-3, 0, 1, 2, -1, 1, -2]
let input1 = [-5, 2, -1, -2, 3]

console.log(`The unique triplets that add up to zero for ${[input]} is`, tripletSumToZero(input))
console.log(`The unique triplets that add up to zero for ${[input1]} is`, tripletSumToZero(input1))