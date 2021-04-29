/**
 * Given an array of non-negative integers nums, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Your goal is to reach the last index in the minimum number of jumps.

You can assume that you can always reach the last index.


Example 1:

Input: nums = [2,3,1,1,4]
Output: 2
Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.
Example 2:

Input: nums = [2,3,0,1,4]
Output: 2
 */

// Solution 

function jumpGames(input){
    let arrayLength = input.length
    var jumpCount = 0 
    for (let index = 0; index < input.length; index++) {
        const element = input[index];
        jumpCount += element
        if(jumpCount >= arrayLength && arrayLength > 1){
            return index+1
        }
    }
    return 0
}

let input = [2,3,1,1,4]
let input1 = [2,3,0,1,4]
let customInput = [1,2]

console.log("The number of jumps needed to reach last index =====>", jumpGames(input))
console.log("The number of jumps needed to reach last index =====>", jumpGames(input1))
console.log("The number of jumps needed to reach last index =====>", jumpGames(customInput)) // Solution is incorrect for this input, come back and fix it.