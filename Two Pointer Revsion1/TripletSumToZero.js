// Given an array of unsorted numbers, find all unique triplets in it that add up to zero.

/**
 * 
 * Example 1:

Input: [-3, 0, 1, 2, -1, 1, -2]
Output: [-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]
Explanation: There are four unique triplets whose sum is equal to zero.
Example 2:

Input: [-5, 2, -1, -2, 3]
Output: [[-5, 2, 3], [-2, -1, 3]]
Explanation: There are two unique triplets whose sum is equal to zero.
 * 
 */

// Solution 


// funtion pairWith

function tripletSumToZero(inputArray) {
    console.log("inputArray ====>",inputArray)
    var input = inputArray.sort()
    var triplets = []
    for(let i = 0; i<input.length; i++){
        if(i > 0 && input[i] === input[i - 1]){
            continue
        }
        find_pair(input, -input[i], i+1, triplets)
    }

    return triplets
}

function find_pair(arr, target, left, triplets){
    var right = arr.length - 1

    while (left < right){
        let currentSum = arr[left] + arr[right]

        if(target === currentSum){
            triplets.push([-target, arr[left], arr[right]])

            left += 1
            right -= 1

            while (left < right && arr[left] === arr[left - 1]) {
                left += 1
            }
            while (left < right && arr[right] === arr[right + 1]) {
                right -= 1
            }
        } else if(target > currentSum){
            left += 1
        }else {
            right -= 1
        }
    }
    return triplets
}

let input = [-3, 0, 1, 2, -1, 1, -2]
let input1 = [-5, 2, -1, -2, 3]

console.log("The value of triplets with sum equal to zero ====>", tripletSumToZero(input))
console.log("The value of triplets with sum equal to zero ====>", tripletSumToZero(input1))


