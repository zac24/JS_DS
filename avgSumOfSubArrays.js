// Given an array, find the average of all contiguous subarrays of size ‘K’ in it.
// Array: [1, 3, 2, 6, -1, 4, 1, 8, 2], K=5


// ======= Brute force algorithm ======================

function averageOfSubarrays(arr, K) {
    var result = [];
    for(var i = 0; i < arr.length - K+1; i++){
        var sum = 0;
        for(j=i; j<i+K; j++){
            sum += arr[j];
        }
        result.push(sum/K);
    }
    return result;
}

let inputArray = [1, 3, 2, 6, -1, 4, 1, 8, 2]
let K=5

console.log("average of subArrays ===>", averageOfSubarrays(inputArray, K))


// ================= Sliding Window approach ==========================
