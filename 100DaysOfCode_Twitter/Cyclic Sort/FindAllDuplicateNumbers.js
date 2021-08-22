/**
 * We are given an unsorted array containing ‘n’ numbers taken from the range 1 to ‘n’. 
 * The array has some duplicates, find all the duplicate numbers without using any extra space.
 * 
 * Example 1:
 * Input: [3, 4, 4, 5, 5] 
 * Output: [4, 5]
 * 
 */


 function findDuplicate(input) {
    let i = 0 
    let duplicates = []
    while (i < input.length) {
        if(input[i] !== i + 1){
            const j = input[i] -1 
            if(input[i] !== input[j]){
                [input[i], input[j]] = [input[j], input[i]]
            }else {
                duplicates.push(input[i])
                i += 1
            }
        }else {
            i += 1
        }
    }
    return duplicates
}

let input = [3, 4, 4, 5, 5]
let input1 = [5, 4, 7, 2, 3, 5, 3]

console.log(`the result of Duplicates from ${input}: `, findDuplicate(input))
console.log(`the result of Duplicates from ${input1}: `, findDuplicate(input1))

