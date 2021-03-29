 /**
  * 1. Maximum Sum Subarray of Size K (easy)
  * 
  * Given an array of positive numbers and a positive number ‘k’, 
  * find the maximum sum of any contiguous subarray of size ‘k’.
  
Example 1:

Input: [2, 1, 5, 1, 3, 2], k=3 
Output: 9
Explanation: Subarray with maximum sum is [5, 1, 3].
Example 2:

Input: [2, 3, 4, 1, 5], k=2 
Output: 7
Explanation: Subarray with maximum sum is [3, 4].

 */

 /*
 function maxSumSubArray(input, k){
    var start = 0
    var max = 0 
    var sum = 0
    for (let end = 0; end < input.length; end++){
         sum += input[end]
         if(end - start + 1 >= k){
             max = Math.max(max, sum)
             sum -= input[start]
             start += 1
         }
    }
    return max
 }

 console.log('The max sum of SubArray of size K', maxSumSubArray([2, 1, 5, 1, 3, 2], 3))
 console.log('The max sum of SubArray of size K', maxSumSubArray([2, 3, 4, 1, 5], 2))
 */




//  ====================================================================================

/**
 * Smallest Subarray with a given sum (easy)
 * 
 * 
Problem Statement #
Given an array of positive numbers and a positive number ‘S’, find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0, if no such subarray exists.

Example 1:

Input: [2, 1, 5, 2, 3, 2], S=7 
Output: 2
Explanation: The smallest subarray with a sum great than or equal to '7' is [5, 2].
Example 2:

Input: [2, 1, 5, 2, 8], S=7 
Output: 1
Explanation: The smallest subarray with a sum greater than or equal to '7' is [8].
Example 3:

Input: [3, 4, 1, 1, 6], S=8 
Output: 3
Explanation: Smallest subarrays with a sum greater than or equal to '8' are [3, 4, 1] or [1, 1, 6].

 */

//  function smallestSubArrayOfGivenSum(input, k){
//     var start = 0 
//     var length = Infinity
//     var sum = 0
//     for(let end = 0; end < input.length; end ++){
//         sum += input[end]

//         while(sum >= k){
//             length = Math.min(length, end - start +1)
//             sum -= input[start]
//             start += 1
//         }
//     }
//     return length
//  }

//  console.log('The smallest SubArray of given sum', smallestSubArrayOfGivenSum([2, 1, 5, 2, 3, 2], 7))
//  console.log('The smallest SubArray of given sum', smallestSubArrayOfGivenSum([2, 1, 5, 2, 8], 7))
//  console.log('The smallest SubArray of given sum', smallestSubArrayOfGivenSum([3, 4, 1, 1, 6], 8))


 // ========================================================================================

 /**
  * Longest Substring with K Distinct Characters (medium)
  * 
  * Problem Statement #
Given a string, find the length of the longest substring in it with no more than K distinct characters.

Example 1:

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
  */

  // function longestSubstringWithKDistinct (input, k){
  //     var start = 0 
  //     var maxLength = 0 
  //     var charMap = {}
  //     for (end = 0; end < input.length; end++){
  //       let rightChar = input[end]
  //       if(!(rightChar in charMap)){
  //         charMap[rightChar] = 1
  //       }
  //       charMap[rightChar] += 1 

  //       if(Object.keys(charMap).length > k) {
  //         let leftChar = input[start]
  //         charMap[leftChar] -= 1
  //         start += 1
  //       }
  //       maxLength = Math.max(maxLength, end - start + 1)
  //     }
  //   return maxLength
  // }

  // console.log('The longest SubArray with K distinct', longestSubstringWithKDistinct('araaci', 2))
  // console.log('The longest SubArray with K distinct', longestSubstringWithKDistinct('araaci', 1))
  // console.log('The longest SubArray with K distinct', longestSubstringWithKDistinct('cbbebi', 3))


// =================================================================================================

/**
 * No-repeat substring
 * 
 * 
 * Problem Statement #
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
Explanation: Longest substrings without any repeating characters are "abc" & "cde".

 */

// function longestNoRepeatSubstring (input){
//   var start = 0 
//   var maxLength = 0 
//   var charMap = {}
//   for (let end = 0; end < input.length; end++){
//     let rightChar = input[end]
//     if(!(rightChar in charMap)){
//       charMap[rightChar] = 1
//     }else {
//       let leftChar = input[start]
//       charMap[leftChar] -= 1
//       if(charMap[leftChar] === 0){
//         delete charMap[leftChar]
//       }
//       start = end
//     }
//     maxLength = Math.max(maxLength, end - start + 1)
//   }
//   return maxLength
// }

//   console.log('The longest no repeat substring', longestNoRepeatSubstring('aabccbb'))
//   console.log('The longest no repeat substring', longestNoRepeatSubstring('abbbb'))
//   console.log('The longest no repeat substring', longestNoRepeatSubstring('abccde'))


// ================================================================================================

/**
 * 
 * Longest Substring with Same Letters after Replacement (hard)
 * 
 * 
 * Problem Statement #
Given a string with lowercase letters only, if you are allowed to replace no more than ‘k’ letters with any letter, find the length of the longest substring having the same letters after replacement.

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

 */

// function longestSubstringAfterKReplacement (str, k) {
//   var start = 0
//   var maxLength = 0
//   var charMap = {}
//   var maxRepeatCount = 0
//   for(let end = 0; end < str.length; end++){
//     let rightChar = str[end]
//     if (!(rightChar in charMap)){
//       charMap[rightChar] = 0
//     }
//     charMap[rightChar] += 1
//     maxRepeatCount = Math.max(maxRepeatCount, charMap[rightChar])
//     if(end - start + 1 > maxRepeatCount + k){
//       let leftChar = str[start]
//       charMap[leftChar] -= 1
//       start += 1
//     }

//     maxLength = Math.max(maxLength, end - start + 1)
//   }
//   return maxLength
// }

//   console.log('The longest K repeat substring', longestSubstringAfterKReplacement('aabccbb', 2))
//   console.log('The longest K repeat substring', longestSubstringAfterKReplacement('abbcb', 1))
//   console.log('The longest K repeat substring', longestSubstringAfterKReplacement('abccde', 1))


// ====================================================================================================

/**
 * 
 * Longest Subarray with Ones after Replacement (hard)
 * 
 * Problem Statement #
Given an array containing 0s and 1s, if you are allowed to replace no more than ‘k’ 0s with 1s, find the length of the longest contiguous subarray having all 1s.

Example 1:

Input: Array=[0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], k=2
Output: 6
Explanation: Replace the '0' at index 5 and 8 to have the longest contiguous subarray of 1s having length 6.
Example 2:

Input: Array=[0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], k=3
Output: 9
Explanation: Replace the '0' at index 6, 9, and 10 to have the longest contiguous subarray of 1s having length 9.
 * 
 */

function longestSubArrayWithKOnesReplaced (input, k) {
  var start = 0 
  var maxlength = 0 
  
}


 