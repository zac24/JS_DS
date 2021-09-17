/**
 * 
 * Find Second smallest number in an integer array
 * 
 */

function secondSmallestNumber(input){
    let smallest = Infinity
    let secondSmallest = Infinity

    if (input.length < 2)
    {
       console.log(" Invalid Input ");
        return;
    }

    for(let i = 0; i < input.length; i++){
        if(input[i] < smallest){
            secondSmallest = smallest
            smallest = input[i]
        }else if(input[i] < secondSmallest && input[i] !== smallest){
            secondSmallest = input[i]
        }
    }

    if(secondSmallest === Infinity){
        console.log('No smallest or second smallest exist')
    }else {
        console.log('The second smallest element is', secondSmallest)
    }

}

secondSmallestNumber([ 12, 13, 1, 10, 34, 1 ])