/**
 * Given a string s, find the length of the longest substring without repeating characters.

 

Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

Example 4:
Input: s = ""
Output: 0
 */

//  ===================================== Solution ====================================

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let left = 0 
    let right = 0 
    let maxLengthOfSubstring = 0 
    let subSet = new Set()
    
    while(right < s.length){
        if(!subSet.has(s.charAt(right))){
            subSet.add(s.charAt(right))
            maxLengthOfSubstring = Math.max(maxLengthOfSubstring, subSet.size)
            right++;
        }else {
            subSet.delete(s.charAt(left))
            left++;
        }
    }
    
    return maxLengthOfSubstring
};