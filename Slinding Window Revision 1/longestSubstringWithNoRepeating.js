// Given a string, find the length of the longest substring which has no repeating characters.

/**
 * 
 * Example 1:

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
 * 
 * 
 */

// Solution:

function longestSubstringWithNoRepeat(input){
    
    var start = 0
    var charMap = {}
    var maxLength = 0
    
    for(let end = 0; end <input.length; end++) {
        const right = input[end]

        if(charMap.hasOwnProperty(right)){
            start = Math.max(start, charMap[right] + 1)
        }
        charMap[right] = end

        maxLength = Math.max(maxLength, end - start + 1)
    }

    return maxLength

}

let input = "aabccbb"
let input1 = "abbbb"
let input2 = "abccde"

console.log ("The longest substring with No Repeat =====>", longestSubstringWithNoRepeat(input))
console.log ("The longest substring with No Repeat =====>", longestSubstringWithNoRepeat(input1))
console.log ("The longest substring with No Repeat =====>", longestSubstringWithNoRepeat(input2))


