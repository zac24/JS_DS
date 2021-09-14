/**
 * 
 * Find the Corrupt Pair:
 * 
 * We are given an unsorted array containing ‘n’ numbers taken from the range 1 to ‘n’. 
 * The array originally contained all the numbers from 1 to ‘n’, but due to a data error, 
 * one of the numbers got duplicated which also resulted in one number going missing. 
 * Find both these numbers.
 * 
 * Example 1: 
 * Input: [3, 1, 2, 5, 2] 
 * Output: [2, 4] 
 * Explanation: '2' is duplicated and '4' is missing.
 * 
 */

function findCorruptPair(input) {
    let i = 0 
    let corruptNumbers = []
    while(i < input.length){
        const j = input[i] - 1
        if(input[i] !== input[j]){
            [input[i], input[j]] = [input[j], input[i]]
            }else {
                i += 1
            }
        }

    for (let i = 0; i < input.length; i++) {
        if(input[i] !== i +1){
            corruptNumbers.push(input[i], i+1)
        }  
    }
    return corruptNumbers
}

let input = [3, 1, 2, 5, 2] 
console.log(`The corrupt pair from ${input}`, findCorruptPair(input))

