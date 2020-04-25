function findElement(numArray, target) {
  let retArray = [];
  let valSet = new Set(numArray);

  for (var element of numArray) {
    const nextElement = target - element;
    if (valSet.has(nextElement)) {
      retArray.push(element);
      retArray.push(nextElement);
    //   valSet.delete(element);
    }
  }
  return retArray;
}

nums = [1, 5, 6, 8, 3, 9, 23, 43, 65, 7, 4];
target = 66;

console.log(findElement(nums, target));
