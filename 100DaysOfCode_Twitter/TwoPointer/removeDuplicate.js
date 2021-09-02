/**
 * 
 * Given an array of sorted numbers, remove all duplicates from it. 
 * You should not use any extra space; after removing the duplicates in-place return the new length of the array
 * 
 
Example 1:
Input: [2, 3, 3, 3, 6, 9, 9]
Output: 4
Explanation: The first four elements after removing the duplicates will be [2, 3, 6, 9].

Example 2:
Input: [2, 2, 2, 11]
Output: 2
Explanation: The first two elements after removing the duplicates will be [2, 11].

 * 
 */

function removeDuplicates(inputArr) {

    var firstPointer = 1
    var i = 1

    while(i < inputArr.length){
        if(inputArr[firstPointer - 1] !== inputArr[i]) {
            inputArr[firstPointer] = inputArr[i]
            firstPointer += 1
        }
        i += 1
    }
    return firstPointer
}

let input = [2, 3, 3, 3, 6, 9, 9]
let input1 = [2, 2, 2, 11]

console.log("length of new array after removing duplicate for ${input} is ", removeDuplicates(input))
console.log("length of new array after removing duplicate for ${input} is ", removeDuplicates(input1))
