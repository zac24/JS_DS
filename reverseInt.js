// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// ========== 2nd Solution =============

function reverseInt(num) {
    // const reverseNum = n
    //   .toString()
    //   .split("")
    //   .reverse()
    //   .join("");
  
    // return parseInt(reverseNum) * Math.sign(n);
    var a = num.toString();
    var result = '';
    for(var i=a.length-1; i>=0; i--){
        if(a[i] !=='0' && a[i]!=='-'){
            result = result+a[i];
        }
    }
    
    result = parseInt(result,10);
    if(a[0] === '-'){
        result = -1*result;
    }
    
     return result;
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
  
  console.log(reverseInt(500));