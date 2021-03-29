/**
 * 
 * Title : Squaring a Sorted Array
 * 
 * 
 * Problem Statement #
Given a sorted array, create a new array containing squares of all the number of the input array in the sorted order.

Example 1:

Input: [-2, -1, 0, 2, 3]
Output: [0, 1, 4, 4, 9]
Example 2:

Input: [-3, -1, 0, 1, 2]
Output: [0 1 1 4 9]
 * 
 */


function squareASortedArray(input) {
    let n = input.length
    var resulArray = Array(n).fill(0)
    var highestSquareIndex = n - 1
    var left = 0
    var right = n-1

    while (right > left) {
        let leftSquare = input[left] * input[left]
        let rightSquare = input[right] * input[right]

        if(rightSquare >= leftSquare) {
            resulArray[highestSquareIndex] = rightSquare
            right -= 1
        }else{
            resulArray[highestSquareIndex] = leftSquare
            left += 1
        }
        highestSquareIndex -= 1
    }

    return resulArray
}

console.log('The square of Sorted Array ====>', squareASortedArray([-2, -1, 0, 2, 3]))
console.log('The square of Sorted Array ====>', squareASortedArray([-3, -1, 0, 1, 2]))