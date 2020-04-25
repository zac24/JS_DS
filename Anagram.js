// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// ================================================ first Solution ===================================================

/* function anagrams(firstString, secondString) {
  return cleanSortedString(firstString) === cleanSortedString(secondString);
}

function cleanSortedString(inputString) {
  return inputString
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
}

console.log(
  "anagrams('Hi there', 'Bye there')",
  anagrams("Hi there", "Bye there")
);
console.log(
  "anagrams('rail safety', 'fairy tales')",
  anagrams("rail safety", "fairy tales")
); */

// ================================================ Second Solution ===================================================

function anagrams(firstString, secondString) {
  const firstCharMap = buildCharMap(firstString);
  const secondCharMap = buildCharMap(secondString);
  if (Object.keys(firstCharMap).length !== Object.keys(secondCharMap).length)
    return false;

  for (let char in firstCharMap) {
    if (firstCharMap[char] !== secondCharMap[char]) {
      return false;
    }
  }

  return true;
}

function buildCharMap(inputString) {
  var inputArr = cleanLowerCaseString(inputString);

  var resultObj = {};
  for (var character of inputArr) {
    if (resultObj[character]) {
      resultObj[character] += 1;
    } else {
      resultObj[character] = 1;
    }
  }
  return resultObj;
}

function cleanLowerCaseString(inputString) {
  return inputString.replace(/[^\w]/g, "").toLowerCase().split("");
}

console.log(
  "anagrams('rail safety', 'fairy tales')",
  anagrams("rail safety", "fairy tales")
);

console.log(
  "anagrams('Hi there', 'Bye there')",
  anagrams("Hi there", "Bye there")
);
