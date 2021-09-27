/**
 * 
 * Write a function that takes in a non-empty array of distinct integers and an
  integer representing a target sum. If any two numbers in the input array sum
  up to the target sum, the function should return them in an array, in any
  order. If no two numbers sum up to the target sum, the function should return
  an empty array.
 * 
 * @param {*} array 
 * @param {*} targetSum 
 * @returns 
 */



function twoNumberSum(array, targetSum) {
    // Write your code here.
      let tempArray = array.sort((a,b) => a-b)
      let left = 0
      let right = tempArray.length - 1
      
      while(left < right){
          let sum = tempArray[left] + tempArray[right]
          
          if(sum === targetSum){
              return [tempArray[left], tempArray[right]]
          }
          
          if(sum > targetSum){
              right --
          }else {
              left ++
          }
      }  
      return []
  }


  console.log('==============>',twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10))