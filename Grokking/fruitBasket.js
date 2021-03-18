// Title: Fruits into Baskets (medium)

/** Given an array of characters where each character represents a fruit tree, you are given two baskets and your goal is to put maximum number of fruits in each basket. The only restriction is that each basket can have only one type of fruit.

You can start with any tree, but once you have started you can’t skip a tree. You will pick one fruit from each tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.

Write a function to return the maximum number of fruits in both the baskets.

Example 1:

Input: Fruit=['A', 'B', 'C', 'A', 'C']
Output: 3
Explanation: We can put 2 'C' in one basket and one 'A' in the other from the subarray ['C', 'A', 'C']
Example 2:

Input: Fruit=['A', 'B', 'C', 'B', 'B', 'C']
Output: 5
Explanation: We can put 3 'B' in one basket and two 'C' in the other basket. 
This can be done if we start with the second letter: ['B', 'C', 'B', 'B', 'C'] */

function maxFruitsInBasket(arr, k){
    let maxfruit = 0 
    let start = 0 
    let basketContainer = {}
    for (let end = 0; end < arr.length; end++){
        let rightBasket = arr[end]
        if(!basketContainer.hasOwnProperty(rightBasket)){
            basketContainer[rightBasket] = 0
        }
        basketContainer[rightBasket] += 1

        while(Object.keys(basketContainer).length > k){
            let leftBasket = arr[start]
            basketContainer[leftBasket] -= 1
            if(basketContainer[leftBasket] === 0){
                delete basketContainer[leftBasket]
            }
            start += 1
        }
        maxfruit = Math.max(maxfruit, end - start + 1)

    }
    return maxfruit
}

let input = ['A', 'B', 'C', 'B', 'B', 'C']
let numberOfBasket = 2

console.log('max fruit in basket ========', maxFruitsInBasket(input, numberOfBasket))