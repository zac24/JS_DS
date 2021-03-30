/**
 * 
 * Title: Triplet Sum to Zero
 * 
 * Problem Statement #
Given an array of unsorted numbers, find all unique triplets in it that add up to zero.

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

function tripletSumToZero (input) {
    var resulArray = []
    let left = 1
    let right = input.length - 1

    let sortedInput = input.sort((a,b) => a-b)
    console.log('Sorted Input =====>', sortedInput)

    for(let i = 0; i < input.length; i++){
        if(i > 0 && input[i] === input[i-1]){
            continue;
        }
        searchPair(input, -input[i], i+1, resulArray)
    }
     return resulArray
}

function searchPair (input, target, left, resulArray) {
    let right = input.length - 1

    while(left < right) {
        let currentSum = input[left] + input[right]
        if(currentSum === target){
            resulArray.push([-target, input[left], input[right]])
            left += 1
            right -= 1

        while(left < right && input[left] === input[left -1]) {
            left += 1
        }
        while(left < right && input[right] === input[right +1]){
            right -= 1
        }
    }else if(target > currentSum){
            left += 1
        }else {
            right -= 1
            
        }
    }
}


console.log('Triplets whose sum is Zero ======>', tripletSumToZero([-5, 2, -1, -2, 3]))