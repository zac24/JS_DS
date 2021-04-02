/**
 * 
 * Title : Triplet Sum Close to Target (medium)
 * 
 * Problem Statement #
Given an array of unsorted numbers and a target number, find a triplet in the array whose sum is as close to the target number as possible, return the sum of the triplet. If there are more than one such triplet, return the sum of the triplet with the smallest sum.

Example 1:

Input: [-2, 0, 1, 2], target=2
Output: 1
Explanation: The triplet [-2, 1, 2] has the closest sum to the target.
Example 2:

Input: [-3, -1, 1, 2], target=1
Output: 0
Explanation: The triplet [-3, 1, 2] has the closest sum to the target.
Example 3:

Input: [1, 0, 1, 1], target=100
Output: 3
Explanation: The triplet [1, 1, 1] has the closest sum to the target.

 * 
 */


function tripletSumCloseToTarget(input, target) {
    let sortedInput = input.sort()
    var smallestDifference = Infinity
    var tripletSum = 0

    for(let i = 0; i < sortedInput.length-2; i++){
        var left = i + 1
        var right = sortedInput.length - 1
        while (left < right){
            // let currentSum = sortedInput[left - 1] + sortedInput[left] + sortedInput[right]
            var difference = target - sortedInput[i] - sortedInput[left] - sortedInput[right]    
            if(difference === 0){
                return target - difference
            }
            if(Math.abs(difference) < Math.abs(smallestDifference)){
                smallestDifference = difference
            }
            if(difference > 0){
                left += 1
            }else{
                right -= 1
            }
        }
    }
    tripletSum = target - smallestDifference

    return tripletSum
}

console.log('Triplet sum close to targe is =====>',tripletSumCloseToTarget([-2, 0, 1, 2], 2))
console.log('Triplet sum close to targe is =====>',tripletSumCloseToTarget([-3, -1, 1, 2], 1))
console.log('Triplet sum close to targe is =====>',tripletSumCloseToTarget([1, 0, 1, 1], 100))