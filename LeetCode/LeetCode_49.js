// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Example 2:
// Input: strs = [""]
// Output: [[""]]

// Example 3:
// Input: strs = ["a"]
// Output: [["a"]]

const groupAnagrams = (strs) => {
  console.log("groupAnagrams -> strs", strs);
  const map = {};
  const individualArr = [];

  for (let str of strs) {
    console.log("groupAnagrams -> str", str);
    let sortedString = str.split("").sort().join("");
    console.log("groupAnagrams -> sortedString", sortedString);
    map[sortedString] !== undefined
      ? map[sortedString].push(str)
      : (map[sortedString] = [str]);
  }

  return Object.values(map);
};

const inputArr = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log("the result of grouped Anagrams is ===>", groupAnagrams(inputArr));
