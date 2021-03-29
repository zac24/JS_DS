/**
 * 
 * Title: Remove Duplicates
 * 
 * Problem Statement #
Given an array of sorted numbers, remove all duplicates from it. You should not use any extra space; after removing the duplicates in-place return the new length of the array.

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

function removeDuplicates(input) {
    var lastNonDuplicate = 1
    var i = 1

    while(i < input.length) {
        if(input[lastNonDuplicate - 1] != input[i]){
            input[lastNonDuplicate] = input[i]
            lastNonDuplicate += 1
        }
        i += 1
    }
    return lastNonDuplicate
}

console.log("The length of the Array after removing Duplicates =====>", removeDuplicates([2, 3, 3, 3, 6, 9, 9]))
console.log("The length of the Array after removing Duplicates =====>", removeDuplicates([2, 2, 2, 11]))