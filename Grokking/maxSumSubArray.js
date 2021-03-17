
//Given an array of positive numbers and a positive number ‘k’, 
//find the maximum sum of any contiguous subarray of size ‘k’.

// Input: [2, 1, 5, 1, 3, 2], k=3 
// Output: 9
// Explanation: Subarray with maximum sum is [5, 1, 3].


// ======= Brute force algorithm ======================

function maxSumOfSubarrays(arr, K) {
    var max = [];
    for(var i = 0; i < arr.length - K+1; i++){
        var sum = 0;
        for(j=i; j<i+K; j++){
            sum += arr[j];
        }
        max = sum > max ? sum : max 
    }
    return max;
}


// ================= Sliding Window approach ==========================

// function maxSumOfSubarrays(arr, k) {
//     var max = 0
//     var start = 0 
//     var sum = 0 
//     for(let end = 0; end < arr.length; end++){
//         sum += arr[end]
//         if(end >= k -1){
//             max = sum > max ? sum : max
//             sum -= arr[start]
//             start += 1

//         }
//     }
//     return max
// }

let inputArray = [2, 1, 5, 1, 3, 2]
let K=3

console.log("average of subArrays ===>", maxSumOfSubarrays(inputArray, K))
