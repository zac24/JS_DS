//Given a non-negative integer num, return the number of steps to reduce it to zero. If the current number is even,
//you have to divide it by 2, otherwise, you have to subtract 1 from it.
let numberOfSteps = 0;

const findNumberOfSteps = num => {
  if (num === 1) {
    return numberOfSteps + 1;
  }
  num = num % 2 === 0 ? num / 2 : num - 1;
  numberOfSteps = numberOfSteps + 1;
  return findNumberOfSteps(num);
};

console.log(findNumberOfSteps(9));
