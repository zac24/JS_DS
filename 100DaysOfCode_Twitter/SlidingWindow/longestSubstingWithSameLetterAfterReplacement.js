/**
 * 
 * Given a string with lowercase letters only, if you are allowed to replace no more than ‘k’ letters
 * with any letter, find the length of the longest substring having the same letters after replacement.
 * 
Example 1:
Input: String="aabccbb", k=2
Output: 5
Explanation: Replace the two 'c' with 'b' to have a longest repeating substring "bbbbb".

Example 2:
Input: String="abbcb", k=1
Output: 4
Explanation: Replace the 'c' with 'b' to have a longest repeating substring "bbbb".

Example 3:
Input: String="abccde", k=1
Output: 3
Explanation: Replace the 'b' or 'd' with 'c' to have the longest repeating substring "ccc".

 *
 */


function longestSubstringWithSameLetterAfterReplacement(str, k) {
    var start = 0 
    var maxLength = 0 
    var charMap = {}
    var maxRepeatCount = 0

    for(end = 0; end < str.length; end++){
        var rightChar = str[end]

        if(!charMap.hasOwnProperty(rightChar)){
            charMap[rightChar] = 0
        }
        charMap[rightChar] += 1
        maxRepeatCount = Math.max(maxRepeatCount, charMap[rightChar])
        if((end - start + 1) - maxRepeatCount > k){
            var leftChar = str[start]
            charMap[leftChar] -= 1
            start += 1
        }
        maxLength = Math.max(maxLength, end - start + 1)
    }
    return maxLength
}
let input = "aabccbb", k=2
let input1 = "abbcb", k1=1

console.log(`The longest Substring with Same Letter After Replacement for ${input} with 
            Replacement ${k} is`, longestSubstringWithSameLetterAfterReplacement(input, k))

console.log(`The longest Substring with Same Letter After Replacement for ${input} with 
            Replacement ${k} is`, longestSubstringWithSameLetterAfterReplacement(input1, k1))