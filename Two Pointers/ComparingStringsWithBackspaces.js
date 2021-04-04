/**
 * 
 * Title: Comparing Strings containing Backspaces
 * 
 * Given two strings containing backspaces (identified by the character ‘#’), check if the two strings are equal.

Example 1:

Input: str1="xy#z", str2="xzz#"
Output: true
Explanation: After applying backspaces the strings become "xz" and "xz" respectively.
Example 2:

Input: str1="xy#z", str2="xyz#"
Output: false
Explanation: After applying backspaces the strings become "xz" and "xy" respectively.
Example 3:

Input: str1="xp#", str2="xyz##"
Output: true
Explanation: After applying backspaces the strings become "x" and "x" respectively.
In "xyz##", the first '#' removes the character 'z' and the second '#' removes the character 'y'.
Example 4:

Input: str1="xywrrmp", str2="xywrrmu#p"
Output: true
Explanation: After applying backspaces the strings become "xywrrmp" and "xywrrmp" respectively.
 * 
 */


function compareStringWithBackSpaces(first, second){

    // console.log('getStringWithoutBackspace(first) ====>',getStringWithoutBackspace(first))
    // console.log('getStringWithoutBackspace(second) ====>',getStringWithoutBackspace(second))

    if(getStringWithoutBackspace(first) === getStringWithoutBackspace(second)){
        return true
    }

    return false
}

function getStringWithoutBackspace(string) {
    var resultArray = []
    var str = string
    for(let i = 0; i < string.length; i++){
        if(string[i] === '#'){
            resultArray.pop()
        }else{
            resultArray.push(str[i])
        }
    }

   return resultArray.join('')
} 

console.log('Comparing string with Backspaces ====>',compareStringWithBackSpaces('xy#z', 'xzz#'))
console.log('Comparing string with Backspaces ====>',compareStringWithBackSpaces('xy#z', 'xyz#'))
console.log('Comparing string with Backspaces ====>',compareStringWithBackSpaces('xp#', 'xyz##'))
console.log('Comparing string with Backspaces ====>',compareStringWithBackSpaces('xywrrmp', 'xywrrmu#p'))
