// Given an array, find the average of all contiguous subarrays of size ‘K’ in it.

// Array: [1, 3, 2, 6, -1, 4, 1, 8, 2], K=5

// Output: [2.2, 2.8, 2.4, 3.6, 2.8]


// ======================== Solution ========================

function avgOfSubArray(input, k) {
    var start = 0 
    var sum = 0
    var result = []
    for(let end = 0; end < input.length; end++){
        let right = input[end]
        sum += right
        if(end  >= k-1){
            console.log("=====>",sum, sum/k)
            result.push(sum/k)
            sum -= input[start]
            start += 1
        }
        
    }

    return result
}


console.log("The Avg of all contiguous subarrays ========>", avgOfSubArray([1, 3, 2, 6, -1, 4, 1, 8, 2], 5))