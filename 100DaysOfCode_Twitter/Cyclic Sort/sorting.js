/**
 * 
 * Sort the elements from 1 to n in a given unsorted array using cyclic sort without using extra space.
 * 
 * input: [3, 4, 6, 2, 1, 5]
 * output: [1, 2, 3, 4, 5, 6]
 * 
 */

function sortArray(input) {

    let i = 0
    while(i < input.length) {
        if(input[i] !== i+1){
            let index = input[i]-1
            let x = input[i]
            input[i] = input[index]
            input[index] = x
        }else {
            i += 1
        } 
    }
    return input
}

let input = [3, 4, 6, 2, 1, 5]
console.log(`The sort of ${input}:  `, sortArray(input))