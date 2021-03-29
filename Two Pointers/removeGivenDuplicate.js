/**
 * 
 * Title : Remove Given Duplicate 
 * 
 * Problem 1: Given an unsorted array of numbers and a target ‘key’, remove all instances of ‘key’ in-place and return the new length of the array.

Example 1:

Input: [3, 2, 3, 6, 3, 10, 9, 3], Key=3
Output: 4
Explanation: The first four elements after removing every 'Key' will be [2, 6, 10, 9].
Example 2:

Input: [2, 11, 2, 2, 1], Key=2
Output: 2
Explanation: The first two elements after removing every 'Key' will be [11, 1].
Solution: This problem is quite similar to our parent problem. We can follow a two-pointer approach and shift numbers left upon encountering the ‘key’. Here is what the code will look like:
 * 
 */

function removeGivenDuplicates (input, target) {
    var nextElement = 0

    var i = 0

    while (i < input.length) {
        if(input[i] !== target){
            input[nextElement] = input[i]
            nextElement +=1
        }
        i += 1
    }

    return nextElement
}

console.log ("The length of new Array after removing given Duplicates ====>", removeGivenDuplicates([3, 2, 3, 6, 3, 10, 9, 3], 3))
console.log ("The length of new Array after removing given Duplicates ====>", removeGivenDuplicates([2, 11, 2, 2, 1], 2))