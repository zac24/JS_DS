/**
 * 
 * Given a string, find the length of the longest substring which has no repeating characters.
 * 

Example 1:
Input: String="aabccbb"
Output: 3
Explanation: The longest substring without any repeating characters is "abc".

Example 2:
Input: String="abbbb"
Output: 2
Explanation: The longest substring without any repeating characters is "ab".

Example 3:
Input: String="abccde"
Output: 3
Explanation: Longest substrings without any repeating characters are "abc" & "cde".
 * 
 */

function noRepeatString(inputArr) {
    var start = 0 
    var charMap = {}
    var maxLength = 0 
    for (let end = 0; end < inputArr.length; end++) {
        const right = inputArr[end];
        if(!charMap.hasOwnProperty(right)){
            charMap[right] = 1
        }else {
            while(Object.keys(charMap).length > 1){
                var leftChar = inputArr[start]
                delete charMap[leftChar]
                start += 1
            }
            start = end 
            charMap[right] = 1 
        }
        maxLength = Math.max(maxLength, end - start + 1)
    }
    return maxLength
}

let input = "aabccbb"
let input1 = "abbbb"
let input2 = "abccde"

console.log(`Length of longest substring with no repeating for ${input} is:`, noRepeatString(input))
console.log(`Length of longest substring with no repeating for ${input1} is:`, noRepeatString(input1))
console.log(`Length of longest substring with no repeating for ${input2} is:`, noRepeatString(input2))