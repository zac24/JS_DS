/**
 * Permutation in a String (hard) #
Given a string and a pattern, find out if the string contains any permutation of the pattern.

Permutation is defined as the re-arranging of the characters of the string. For example, “abc” has the following six permutations:

abc
acb
bac
bca
cab
cba
If a string has ‘n’ distinct characters it will have n!n! permutations.

Example 1:

Input: String="oidbcaf", Pattern="abc"
Output: true
Explanation: The string contains "bca" which is a permutation of the given pattern.
Example 2:

Input: String="odicf", Pattern="dc"
Output: false
Explanation: No permutation of the pattern is present in the given string as a substring.
Example 3:

Input: String="bcdxabcdy", Pattern="bcdyabcdx"
Output: true
Explanation: Both the string and the pattern are a permutation of each other.
Example 4:

Input: String="aaacb", Pattern="abc"
Output: true
Explanation: The string contains "acb" which is a permutation of the given pattern.

 */

 function permutationInString(str, pattern){
     var start = 0 
     var patternCharMap = {}

     for (let i = 0; i < pattern.length; i++){
         let rightChar = pattern[i]
        if(!(rightChar in patternCharMap)){
            patternCharMap[rightChar] = 0
        }
        patternCharMap[rightChar] += 1
     }

     for(let end = 0; end < str.length; end++){
         let rightChar = str[end]
         if(rightChar in patternCharMap){
             patternCharMap[rightChar] -= 1
             
         }else {
             start += 1
         }
         if(patternCharMap[rightChar] === 0){
            delete patternCharMap[rightChar]
        }
     }
     if(Object.keys(patternCharMap).length === 0){
        return true
    }
     return false 
 }

 let input = 'oidbcaf'
 let pattern = 'abc'
 console.log('The pemutation of pattern in given String', permutationInString(input, pattern))
 console.log('The pemutation of pattern in given String', permutationInString('odicf', 'dc'))
 console.log('The pemutation of pattern in given String', permutationInString('bcdxabcdy', 'bcdyabcdx'))
 console.log('The pemutation of pattern in given String', permutationInString(
     'aaacb', 'abc'))
