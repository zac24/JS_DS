/**
 * 
 * Given an array of unsorted numbers and a target number, find a triplet in the array whose sum is as close to the target number as possible, return the sum of the triplet. 
 * If there are more than one such triplet, return the sum of the triplet with the smallest sum.
 * 
 
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

 */



function tripletSumCloseToTarget(inputArr, target){
    var input = inputArr.sort() 
    var smallestDifference = Infinity
    for (let i = 0; i < input.length; i++) {
        var left = i+1
        var right = input.length - 1
        while(right > left){
            var targetDifference = target - input[i] - input[left] - input[right]
            if(targetDifference === 0){
               return targetDifference = target
            }
            if(abs(targetDifference) < abs(smallestDifference)){
                smallestDifference = targetDifference
            }
            if(targetDifference > 0){
                left += 1
            }else{
                right -= 1
            }
        }
        return target - smallestDifference
    }
}

let input = [-2, 0, 1, 2], target = 2
let input1 = [-3, -1, 1, 2], target1 = 1 
let input2 = [1, 0, 1, 1], target2 = 100

console.log(`triplet Sum close to Zero for input: ${input} and target ${target} is`, tripletSumCloseToTarget(input, target))
console.log(`triplet Sum close to Zero for input: ${input1} and target ${target1} is`, tripletSumCloseToTarget(input1, target1))
console.log(`triplet Sum close to Zero for input: ${input2} and target ${target2} is`, tripletSumCloseToTarget(input2, target2))


