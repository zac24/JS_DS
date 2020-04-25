// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  let chunked = [];
  

  for (let element of array) {
    const lastChunk = chunked[chunked.length - 1];
    if (lastChunk.length === size || lastChunk.length === 0) {
      chunked.push([element]);
    } else {
      lastChunk.push(element);
    }
  }
  console.log("chunk -> lastChunk", lastChunk);
}

chunk([1, 2, 3, 4], 2);
