const Queue = require("./queue");

function weave(sourceOne, sourceTwo) {
  const weaveQueue = new Queue();
  while (sourceOne.peek() || sourceTwo.peek()) {
    if (sourceOne.peek()) {
      weaveQueue.add(sourceOne.remove());
    }
    if (sourceTwo.peek()) {
      weaveQueue.add(sourceTwo.remove());
    }
  }
  return weaveQueue;
}

const q1 = ["1", "2", "3"];
const q2 = ["h1", "h2", "h3", "h4"];

console.log("The waeveQueue value is ====>", weave(q1, q2));
