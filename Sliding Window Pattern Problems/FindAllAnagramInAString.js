/**
 * 
 * String Anagrams (hard) #
Given a string and a pattern, find all anagrams of the pattern in the given string.

Anagram is actually a Permutation of a string. For example, “abc” has the following six anagrams:

abc
acb
bac
bca
cab
cba
Write a function to return a list of starting indices of the anagrams of the pattern in the given string.

Example 1:

Input: String="ppqp", Pattern="pq"
Output: [1, 2]
Explanation: The two anagrams of the pattern in the given string are "pq" and "qp".
Example 2:

Input: String="abbcabc", Pattern="abc"
Output: [2, 3, 4]
Explanation: The three anagrams of the pattern in the given string are "bca", "cab", and "abc".
 * 
 */

function getAllAnagramsOfString(input, pattern) {
    var start = 0 
    var patternCharMap = {}
    var matched = 0
    var result = []
    for(i = 0; i < pattern.length; i++) {
        let rightChar = pattern[i]
        if (!(rightChar in patternCharMap)){
            patternCharMap[rightChar] = 0
        }
        patternCharMap[rightChar] += 1
    }

    for(let end = 0; end < input.length; end++){
        let rightChar = input[end]
        if (rightChar in patternCharMap){
            patternCharMap[rightChar] -= 1
            if(patternCharMap[rightChar] === 0){
                matched += 1
            }    
        }
        if(matched === Object.keys(patternCharMap).length){
            result.push(start)
        }

        if(end >= pattern.length - 1){
            let leftChar = input[start]
            start += 1
            if(leftChar in patternCharMap){
                if(patternCharMap[leftChar] === 0) {
                    matched -= 1
                }
                patternCharMap[leftChar] += 1
            } 
        }
    }
    return result
}

console.log('The Anagram Indices of pattern in given String', getAllAnagramsOfString('ppqp', 'pq'))
console.log('The Anagram Indices of pattern in given String', getAllAnagramsOfString('abbcabc', 'abc'))
 