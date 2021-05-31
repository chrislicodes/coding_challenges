"ust strict";

// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

function pigIt(str) {
  const regEx = /[A-Za-z0-9_]/;

  return str
    .split(" ")
    .map((word) => {
      if (regEx.test(word)) {
        return word.slice(1) + word[0] + "ay";
      } else {
        return word;
      }
    })
    .join(" ");
}

console.log(pigIt("Pig latin is cool")); // igPay atinlay siay oolcay
console.log(pigIt("Hello world !")); // elloHay orldway !

//with full regex
// function pigIt(str){
//     return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
//   }
