// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// ========== 2nd Solution =============

function reverseInt(n) {
    const reverseNum = n
      .toString()
      .split("")
      .reverse()
      .join("");
  
    return parseInt(reverseNum) * Math.sign(n);
  }
  
  // ========== 1st Solution ============
  
  // function reverseInt(n) {
  //   const reverseNum = n
  //     .toString()
  //     .split("")
  //     .reverse()
  //     .join("");
  
  //   if (n < 0) {
  //     return parseInt(reverseNum) * -1;
  //   }
  
  //   return parseInt(reverseNum);
  // }
  
  console.log(reverseInt(-900));