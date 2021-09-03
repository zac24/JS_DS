/**
 * 
 * Given a sorted array, create a new array containing squares of all the number of the input array in the sorted order.
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

function squaringASortedArray(inputArr) {
    
    var left = 0 
    var right = inputArr.length - 1
    var n = inputArr.length - 1
    var result = Array(n).fill(0)

    while(right > left) {
        let leftSq = inputArr[left] * inputArr[left]
        let rightSq = inputArr[right] * inputArr[right]

        if(rightSq >= leftSq) {
            result[n] = rightSq
            right -= 1
        }else if(leftSq > rightSq){
            result[n] = leftSq
            left += 1
        }
        n -= 1 
    }
    return result
}

let input = [-2, -1, 0, 2, 3]
let input1 = [-3, -1, 0, 1, 2]

console.log(`The Square of sorted Array ${input} is`, squaringASortedArray(input))
console.log(`The Square of sorted Array ${input1} is`, squaringASortedArray(input1))