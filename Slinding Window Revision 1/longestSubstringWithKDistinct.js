// Given a string, find the length of the longest substring in it with no more than K distinct characters.

/**
 * 
 * Example 1:

Input: String="araaci", K=2
Output: 4
Explanation: The longest substring with no more than '2' distinct characters is "araa".
Example 2:

Input: String="araaci", K=1
Output: 2
Explanation: The longest substring with no more than '1' distinct characters is "aa".
Example 3:

Input: String="cbbebi", K=3
Output: 5
Explanation: The longest substrings with no more than '3' distinct characters are "cbbeb" & "bbebi".
 * 
 * 
 */


// Solution: 

function longestSubstringWithKDistinct(input, k){
    var start = 0 
    var longest = 0
    var charMap = {}

    for (let end = 0; end < input.length; end++) {
        const element = input[end];

        if(!charMap.hasOwnProperty(element)){
            charMap[element] = 0
        }
        charMap[element] += 1

        if(Object.keys(charMap).length > k){
            const left = input[start]
            charMap[left] -= 1
            if(charMap[left] === 0){
                delete charMap[left]
            }
            start += 1
        }

        longest = Math.max(longest, end - start + 1)   
    }
    return longest

}

let input1 = "araaci"
let k1 = 2

let input2 = "araaci"
let k2 = 1

let input3 = "cbbebi"
let k3 = 3

console.log("longest substring with K Distinct ======>", longestSubstringWithKDistinct(input1, k1))
console.log("longest substring with K Distinct ======>", longestSubstringWithKDistinct(input2, k2))
console.log("longest substring with K Distinct ======>", longestSubstringWithKDistinct(input3, k3))