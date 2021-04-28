// Given a sorted array, create a new array containing squares of all the number of the input array in the sorted order.
/**
 * 
 *
Example 1:

Input: [-2, -1, 0, 2, 3]
Output: [0, 1, 4, 4, 9]
Example 2:

Input: [-3, -1, 0, 1, 2]
Output: [0 1 1 4 9]
 * 
 */

// Solution 

function squareASortedArray(input){
    var left = 0 
    var right = input.length - 1
    var length = input.length - 1
    var resultArray = new Array(input.length - 1)

    while(left <= right) {
        let leftElement = input[left]
        let rightElement = input[right]

        let leftSquare = leftElement*leftElement
        let rightSquare = rightElement*rightElement

        if(rightSquare > leftSquare){
            resultArray[length] = rightSquare
            right -= 1
        }else  {
            resultArray[length] = leftSquare
            left += 1
        }
        length -= 1
    }

    return resultArray
}

let input = [-2, -1, 0, 2, 3]
let input1 = [-3, -1, 0, 1, 2]

console.log("The Square of Sorted Array =====>", squareASortedArray(input))
// console.log("The Square of Sorted Array =====>", squareASortedArray(input1))