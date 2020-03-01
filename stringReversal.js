// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//============== Solution #1 ====================

// function reverse(str) {
//   var arr = str
//     .split("")
//     .reverse()
//     .join("");
//   return arr;
// }

//=========== Solution #2 =======================

// function reverse(str) {
//   var reversed = "";
//   for (var characters of str) {
//     reversed = characters + reversed;
//   }
//   return reversed;
// }

function reverse(str) {
    return str.split("").reduce((reversed, character) => {
        return character + reversed;
      }, "");
  }


console.log(reverse("apple"));
