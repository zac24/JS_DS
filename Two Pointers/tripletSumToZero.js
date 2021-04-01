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
    let inputArray = input.sort()

    for(let i = 0; i < inputArray.length; i++) {
        if(i > 0 && inputArray[i] === inputArray[i-1]){
            continue
        }
        search_pair(inputArray, -inputArray[i], i+1 , resulArray)
    }
    return resulArray
}

function search_pair(arr, target, left, resultArray) {
    let right = arr.length - 1
    while (left < right) {
        let currentSum = arr[left] + arr[right]
        if(currentSum === target){
            resultArray.push([-currentSum, arr[left], arr[right]])
            left += 1
            right -= 1

            while (left < right && arr[left] === arr[left - 1]){
                left += 1
            } 
            while (left < right && arr[right] === arr[right - 1]){
                right -= 1
            }
        }
        else if(currentSum > target){
            right -= 1
        }else{
            left += 1
        }
    }
}


console.log('Triplets whose sum is Zero ======>', tripletSumToZero([-5, 2, -1, -2, 3]))