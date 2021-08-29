/**
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

 function longestSubarrayWithkUnique(str, k){
    var inputArr = str.split('')
    var start = 0 
    var charFrequency = {}
    var subStrLength = 0 
    for(let end = 0; end < inputArr.length; end++){
        var rightChar = inputArr[end]
        if(charFrequency.hasOwnProperty(rightChar)){
            charFrequency[rightChar] += 1
        }
        charFrequency[rightChar] = 1
        while(Object.keys(charFrequency).length > k){
            var leftChar = inputArr[start]
            charFrequency[leftChar] -= 1
            if(charFrequency[leftChar] === 0){
                delete charFrequency[leftChar]
            } 
            start += 1
        }
        subStrLength = Math.max(subStrLength, end - start + 1)
    }
     return subStrLength
 }

 let input = "araaci", K = 2
 let input1 = "araaci", K1 = 1
 let input2 = "cbbebi", K2 = 3

 console.log("The longest subarray with K unique", longestSubarrayWithkUnique(input, K))
 console.log("The longest subarray with K unique", longestSubarrayWithkUnique(input1, K1))
 console.log("The longest subarray with K unique", longestSubarrayWithkUnique(input2, K2))