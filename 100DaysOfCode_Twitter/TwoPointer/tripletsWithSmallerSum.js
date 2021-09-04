/**
 * 
 * Given an array arr of unsorted numbers and a target sum, count all triplets in it 
 * such that arr[i] + arr[j] + arr[k] < target where i, j, and k are three different indices. 
 * Write a function to return the count of such triplets.
 * 

Example 1:
Input: [-1, 0, 2, 3], target=3 
Output: 2
Explanation: There are two triplets whose sum is less than the target: [-1, 0, 3], [-1, 0, 2]

Example 2:
Input: [-1, 4, 2, 1, 3], target=5 
Output: 4
Explanation: There are four triplets whose sum is less than the target: 
   [-1, 1, 4], [-1, 1, 3], [-1, 1, 2], [-1, 2, 3]

 * 
 */

function tripletWithSmallerSum(inputArr, target){
    var input = inputArr.sort()
    var count = 0

    for(let i = 0; i < input.length - 2; i++){
        let left = i+1
        let right = input.length - 1
        while(right > left) {
            let sum = input[i] + input[left] + input[right]
            if(sum >= target){
                right -= 1
            }else {
                count += right - left
                left += 1
            }
        }
    }
    return count 
}

let input = [-1, 0, 2, 3], target=3 
let input1 = [-1, 4, 2, 1, 3], target1=5

console.log(tripletWithSmallerSum(input, target))
console.log(tripletWithSmallerSum(input1, target1))