/**
 * 
 * Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). 
 * n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). 
 * Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.
 * 
 * Notice that you may not slant the container.
 * 
 */

function mostContainedWater(inputArr){
    let maxArea = 0 
    let i = 0 
    let j = inputArr.length - 1

    while(i < j){
        maxArea = Math.max(maxArea, Math.min(inputArr[i], inputArr[j]) * (j - i))
        if(inputArr[i] < inputArr[j]){
            i += 1
        }else {
            j -= 1
        }
    }
    return maxArea
}

let height = [1,8,6,2,5,4,8,3,7]
console.log('The most contained water will be', mostContainedWater(height))