/**
 * 
 * Find the Smallest Missing Positive Number
 * Given an unsorted array containing numbers, find the smallest missing positive number in it.
 * 
 * Input: [-3, 1, 5, 4, 2]
 * Output: 3
 * Explanation: The smallest missing positive number is '3'
 * 
 */

function smallestMissingPositive(input){
    let i = 0

    while(i < input.length){
        const j = input[i] - 1
        if(input[i] > 0 && input[i] <= input.length && input[i] !== input[j]){
            [input[i], input[j]] = [input[j], input[i]]
        }else {
            i += 1
        }
    }

    for (let i = 0; i < input.length; i++) {
        if(input[i] !== i + 1){
            return i + 1
        }
    }
    return input.length + 1
}

let input = [-3, 1, 5, 4, 2]
console.log(`the smallest missing positive number ${input} :`, smallestMissingPositive(input))

