// Title : No-repeat Substring

/** Problem Statement #
Given a string, find the length of the longest substring which has no repeating characters.

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
Explanation: Longest substrings without any repeating characters are "abc" & "cde" */

function longestSubstringNoRepeat(str){
    var maxLength = 0 
    var start = 0 
    var charMap = {}
    for (let end = 0; end < str.length; end++){
        let rightChar = str[end]
        if(!charMap.hasOwnProperty(rightChar)){
            charMap[rightChar] = 1
        }else {
            while (Object.keys(charMap).length > 1) {
                let leftChar = str[start]
                delete charMap[leftChar]
                start += 1
            }
            start = end 
            charMap[rightChar] = 1
        }
        maxLength = Math.max(maxLength, end - start + 1)

    }
    return maxLength
}



// ========================= Better: Approach with storing character Index in the Map ===================


let input = 'abbbb'
console.log('longest substring with No repeat =====>', longestSubstringNoRepeat(input))