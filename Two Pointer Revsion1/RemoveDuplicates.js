// Given an array of sorted numbers, remove all duplicates from it. You should not use any extra space; after removing the duplicates in-place return the new length of the array.

/**
 * 
 * Example 1:

Input: [2, 3, 3, 3, 6, 9, 9]
Output: 4
Explanation: The first four elements after removing the duplicates will be [2, 3, 6, 9].
Example 2:

Input: [2, 2, 2, 11]
Output: 2
Explanation: The first two elements after removing the duplicates will be [2, 11].
 * 
 * 
 */

// Solution: 

function removeDuplicates(input) {
    var nonDuplicate = 1
    var i = 1
    while (i < input.length) {
        if(input[nonDuplicate - 1] !== input[i]){
            input[nonDuplicate] = input[i]
            nonDuplicate += 1
        }
        i += 1
    }
    return nonDuplicate
}

let input = [2, 3, 3, 3, 6, 9, 9]
let input1 = [2, 2, 2, 11]


console.log("Duplicate removed from Array ====>", removeDuplicates(input))
console.log("Duplicate removed from Array ====>", removeDuplicates(input1))