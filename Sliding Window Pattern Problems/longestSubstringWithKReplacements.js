/**
 * 
Problem Statement #

Given a string with lowercase letters only, if you are allowed to replace no more than ‘k’ letters with any letter, 
find the length of the longest substring having the same letters after replacement
 */

 /**
  * Example 1:

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
 */

 function longestSubstringAfterKReplacement(str, k){
     var maxLength = 0 
     var start = 0 
     var charMap = {}
     var maxRepeatCount = 0 
     for(end = 0; end < str.length; end++){
       let rightChar = str[end]
        if(!(rightChar in charMap)){
          charMap[rightChar] = 0
        }
        charMap[rightChar] += 1
        maxRepeatCount = Math.max(maxRepeatCount, charMap[rightChar])

        if((end - start + 1) - maxRepeatCount > k){
          let leftChar = str[start]
          charMap[leftChar] -= 1
          start += 1
        }
      maxLength = Math.max(maxLength, end - start + 1)
     }
     return maxLength
 }

 let input = 'aabccbb'
 let k = 2

 console.log('Longest Substring With k replacement =====>', longestSubstringAfterKReplacement(input, k))