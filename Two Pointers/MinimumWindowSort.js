/**
 * 
 * Title: Minimum Window Sort
 * 
 * 
 * Given an array, find the length of the smallest subarray in it which when sorted will sort the whole array.

Example 1:

Input: [1, 2, 5, 3, 7, 10, 9, 12]
Output: 5
Explanation: We need to sort only the subarray [5, 3, 7, 10, 9] to make the whole array sorted
Example 2:

Input: [1, 3, 2, 0, -1, 7, 10]
Output: 5
Explanation: We need to sort only the subarray [1, 3, 2, 0, -1] to make the whole array sorted
Example 3:

Input: [1, 2, 3]
Output: 0
Explanation: The array is already sorted
Example 4:

Input: [3, 2, 1]
Output: 3
Explanation: The whole array needs to be sorted.
 * 
 */

function minimumWindowSort(input){
    var windowSize = Infinity
    
    for(let i = 0; i < input.length; i++){
        var right = input.length - 1

        if(input[i] > input[i+1]){
            start = 
        }
    }

}



console.log('The minimum window sort for the input is ====>', minimumWindowSort([1, 2, 5, 3, 7, 10, 9, 12]))
console.log('The minimum window sort for the input is ====>', minimumWindowSort([1, 3, 2, 0, -1, 7, 10]))
console.log('The minimum window sort for the input is ====>', minimumWindowSort([1, 2, 3]))
console.log('The minimum window sort for the input is ====>', minimumWindowSort([3, 2, 1]))