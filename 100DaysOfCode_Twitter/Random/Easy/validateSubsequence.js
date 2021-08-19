/**
 * 
 * Given two non-empty arrays of integers, write a function that determines, 
 * whether the second array is a subsequence of the first one. 
 * 
 * A subsequence of an array is a set of numbers that aren't necessarily adjacent 
 * in the array but that are in the same order as they appear in the array. For 
 * instance, the numbers [1,3,4] form a subsequence of the array [1,2,3,4], and so do the numbers
 * [2,4]
 * 
 * Note that a single number in an array and the array itself are both valid 
 * subsequences of the array.
 * 
 * @param {*} array 
 * @param {*} sequence 
 * @returns 
 */



function isValidSubsequence(array, sequence) {
    // Write your code here.
      
      let arrayIndex = 0
      let seqIndex = 0 
      
      while(seqIndex < sequence.length && arrayIndex < array.length){
          if(array[arrayIndex] === sequence[seqIndex]){
              seqIndex += 1
          }
          arrayIndex += 1
      }
      return seqIndex === sequence.length;
  }

  let array = [5, 1, 22, 25, 6, -1, 8, 10]
  let sequence = [1, 6, -1, 10]

console.log('The validate Subsequence result is ===>', isValidSubsequence(array, sequence))