/**
 * 
 * Given an array of characters where each character represents a fruit tree, you are given two baskets and your goal is to put maximum number of fruits in each basket. The only restriction is that each basket can have only one type of fruit.

You can start with any tree, but once you have started you can’t skip a tree. You will pick one fruit from each tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.

Write a function to return the maximum number of fruits in both the baskets.
 * 

Example 1:

Input: Fruit=['A', 'B', 'C', 'A', 'C']
Output: 3
Explanation: We can put 2 'C' in one basket and one 'A' in the other from the subarray ['C', 'A', 'C']
Example 2:

Input: Fruit=['A', 'B', 'C', 'B', 'B', 'C']
Output: 5
Explanation: We can put 3 'B' in one basket and two 'C' in the other basket. 
This can be done if we start with the second letter: ['B', 'C', 'B', 'B', 'C']

 */



function fruitBasket(input) {
    var start = 0 
    var maxFruit = 0
    var charMap= {}

    for (let end = 0; end < input.length; end++) {
        const right = input[end];

        if(!charMap.hasOwnProperty(right)){
            charMap[right] = 0 
        }
        charMap[right] += 1
        
        while(Object.keys(charMap).length > 2) {
            const left = input[start]
            charMap[left] -= 1
            if(charMap[left] === 0){
                delete charMap[left]
            }
            start += 1
        }
        maxFruit = Math.max(maxFruit, end - start + 1)
    }
    return maxFruit
}

let input1 = ['A', 'B', 'C', 'A', 'C']

let input2 = ['A', 'B', 'C', 'B', 'B', 'C']

console.log("Max fruits in Basket =====>", fruitBasket(input1))
console.log("Max fruits in Basket =====>", fruitBasket(input2))