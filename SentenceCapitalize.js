// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  return str
    .split(" ")
    .map((item) => {
      return `${item[0].toUpperCase()}${item.slice(1)}`;
    })
    .join(" ");
}

console.log(
  "capitalize('a short sentence') =====>",
  capitalize("a short sentence")
);

console.log(
  "capitalize('look, it is working!')",
  capitalize("look, it is working!")
);
