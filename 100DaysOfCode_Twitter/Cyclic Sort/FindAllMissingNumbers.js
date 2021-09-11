/**
 * 
 * Find all Missing Numbers
 * 
 * We are given an unsorted array containing numbers taken from the range 1 to ‘n’. 
 * The array can have duplicates, which means some numbers will be missing. Find all those missing numbers.
 * 
 * Example 1: 
 * Input: [2, 3, 1, 8, 2, 3, 5, 1] 
 * Output: 4, 6, 7 
 * Explanation: The array should have all numbers from 1 to 8, due to duplicates 4, 6, and 7 are missing.
 * 
 */

function findMissingNumbers(input){
    let i = 0 
    let length = input.length 
    let missingNumbers = []

    while (i < length){
        let j = input[i] - 1
        if(input[i] !== input[j]){
            [input[i], input[j]] = [input[j], input[i]]
        }else {
            i += 1
        }
    }

    for(let k = 0; k < input.length; k++){
        if(input[k] !== k+1){
            missingNumbers.push(k+1)
        }
    }
    return missingNumbers
}

let input = [2, 3, 1, 8, 2, 3, 5, 1] 

console.log(`The missing Numbers from array ${input}`, findMissingNumbers(input))