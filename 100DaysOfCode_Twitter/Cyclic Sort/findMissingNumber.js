/**
 * 
 * Find missing number 
 * 
 * We are given an array containing ‘n’ distinct numbers taken from the range 0 to ‘n’. 
 * Since the array has only ‘n’ numbers out of the total ‘n+1’ numbers, find the missing number.
 * 
 */

function findMissingNumber(input){
    let i = 0
    let n = input.length

    while(i < n){
        let j = input[i]
        if(input[i] < n && input[i] !== input[j]){
            [input[i], input[j]] = [input[j], input[i]]
       } else {
           i += 1
       }
    }

    for(let k = 0; k < n; k++){
        if(input[k] !== k){
            return k
        }
    }
}

let input = [4, 0, 3, 1]

console.log(`Missing Element for ${input}:  `, findMissingNumber(input))