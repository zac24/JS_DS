/**
 * Find Duplicate Number
 */


function findDuplicate(input) {
    let i = 0 
    while (i < input.length) {
        if(input[i] !== i + 1){
            let j = input[i] -1 
            if(input[i] !== input[j]){
                [input[i], input[j]] = [input[j], input[i]]
            }else {
                return input[j]
            }
        }else {
            i += 1
        }
    }
    return -1
}

let input = [1, 4, 4, 3, 2]
console.log(`the result of Duplicates from ${input} `, findDuplicate(input))