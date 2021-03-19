// Title : Longest Substring with K Distinct Characters

// Given a string, find the length of the longest substring in it with no more than K distinct characters.

// Example 1:


// Input: String="araaci", K=2
// Output: 4
// Explanation: The longest substring with no more than '2' distinct characters is "araa".
// Example 2:

// Input: String="araaci", K=1
// Output: 2
// Explanation: The longest substring with no more than '1' distinct characters is "aa".
// Example 3:

// Input: String="cbbebi", K=3
// Output: 5
// Explanation: The longest substrings with no more than '3' distinct characters are "cbbeb" & "bbebi".


function longestSubstringWithKUnique(str, k) {
    let arr = str.split('')
    var longest = 0
    var start = 0
    var map = {}
    for (let end = 0; end<arr.length; end++){
        let rightChar = arr[end]
        if(map.hasOwnProperty(arr[end])){
            map[rightChar] += 1
        }else {
            map[rightChar] = 1
        }
        while(Object.keys(map).length > k){
            let leftChar = arr[start]
            map[leftChar] -= 1
            if(map[leftChar] === 0){
                delete map[leftChar]
            }
            start += 1
        }
        longest = Math.max (longest, end - start + 1)
    }
    return longest
}

let input = "abcbbc"
let k = 2
console.log('The longest substring with k unique ======>', longestSubstringWithKUnique(input, k))