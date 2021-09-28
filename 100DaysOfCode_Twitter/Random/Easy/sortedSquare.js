function sortedSquaredArray(array) {
    // Write your code here.
      let result = new Array(array.length).fill(0)
      let left = 0 
      let right = array.length - 1
      
      for(let index = array.length -1; index >= 0; index--){
          const leftValue = array[left] 
          const rightValue = array[right]
          
          if(Math.abs(leftValue) > Math.abs(rightValue)){
              result[index] = leftValue * leftValue 
              left += 1
          } else {
              result[index] = rightValue * rightValue 
              right -= 1
          }
      }
      
    return result;
  }


  console.log('=========>', sortedSquaredArray([1, 2, 3, 5, 6, 8, 9]))