/**
 * 
 * Problem: Smallest Window containing Substring
 * 
 * Given a string and a pattern, 
 * find the smallest substring in the given string which has all the characters of the given pattern.
 * 
 * 
 * 
 * 
Example 1:

Input: String="aabdec", Pattern="abc"
Output: "abdec"
Explanation: The smallest substring having all characters of the pattern is "abdec"
Example 2:

Input: String="abdabca", Pattern="abc"
Output: "abc"
Explanation: The smallest substring having all characters of the pattern is "abc".
Example 3:

Input: String="adcad", Pattern="abc"
Output: ""
Explanation: No substring in the given string has all characters of the pattern.

 * 
 * 
 */


function smallestWindowContainingSubstring(input, subStr) {
    var start = 0 
    var subStrCharMap = {}
    var matched = 0
    var smallest = Infinity
    
    for(let i = 0; i < subStr.length; i++){
        let rightChar = subStr[i]
        if(!(rightChar in subStrCharMap)){
            subStrCharMap[i] = 0
        }
        subStrCharMap[i] += 1
    }

    for (let end = 0; end < input.length; input++){
        let rightChar = input[end]
        if(rightChar in subStrCharMap){
            subStrCharMap[rightChar] -= 1
            if(subStrCharMap[rightChar] === 0){
                matched += 1
            }
        }

        if(matched === Object.keys(subStrCharMap).length){
            smallest = Math.min(smallest, end - start + 1)
        }
    }

    return smallest 

}


console.log('Smallest Window Containing Substring ======>', smallestWindowContainingSubstring('aabdec', 'abc'))
