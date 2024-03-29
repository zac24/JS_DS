/**
 * 
 * Given an array containing 0s, 1s and 2s, sort the array in-place. 
 * You should treat numbers of the array as objects, hence, we can’t count 0s, 1s, and 2s to recreate the array.
 * 
 * The flag of the Netherlands consists of three colors: red, white and blue; 
 * and since our input array also consists of three different numbers that is why it is called Dutch National Flag problem.
 * 

Example 1:
Input: [1, 0, 2, 1, 0]
Output: [0 0 1 1 2]

Example 2:
Input: [2, 2, 0, 1, 2, 0]
Output: [0 0 1 2 2 2 ]

 * 
 */

function dutchNationalFlag(inputArr) {
    var low = 0 
    var high = inputArr.length - 1
    var i = 0 

    while (i <= high) {
        if(inputArr[i] === 0){
            [inputArr[i], inputArr[low]] = [inputArr[low], inputArr[i]]
            i += 1
            low += 1
        } else if (inputArr[i] == 1) {
            i += 1
        } else {
            [inputArr[i], inputArr[high]] = [inputArr[high], inputArr[i]]
            high -= 1
        }
    }
}

let input = [1, 0, 2, 1, 0]
let input1 = [2, 2, 0, 1, 2, 0]

dutchNationalFlag(input)
dutchNationalFlag(input1)

console.log(input)
console.log(input1)