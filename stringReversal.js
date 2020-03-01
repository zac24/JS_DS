// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  var arr = str
    .split("")
    .reverse()
    .join("");
  return arr;
}

console.log(reverse("apple"));
