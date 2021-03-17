
//Given an array of positive numbers and a positive number ‘k’, 
//find the maximum sum of any contiguous subarray of size ‘k’.

// Input: [2, 1, 5, 1, 3, 2], k=3 
// Output: 9
// Explanation: Subarray with maximum sum is [5, 1, 3].


// ========================= Brute force approach ===================

// function maxSumSubArray (arr, k) {
//     var max = 0;
//     for(let i = 0; i < arr.length - k+1; i++){
//         var sum = 0
//         for(j=i; j<i+k; j++){
//             sum += arr[j]
//         }
//         max = Math.max(max, sum)
//     }
//     return max
// }

// ========================= Window Sliding approach ===================

function maxSumSubArray(arr, k) {
    var max = 0 
    var start = 0
    var subArraySum = 0
    for(let end = 0; end < arr.length; end++){
        subArraySum += arr[end]
        if(end >= k-1){
            max = Math.max(subArraySum, max)
            subArraySum -= arr[start]
            start += 1
        }
    }
    return max 
    
}


let inputArray = [2, 3, 4, 1, 5]
let k = 2
console.log('The max sum of subArray =====>', maxSumSubArray(inputArray, k))

// Time Complexity: O(N)
// Space Complexity: O(1)