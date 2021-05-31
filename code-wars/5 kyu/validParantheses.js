"use strict";

function validParentheses(parens) {
  const stack = [];

  for (const paren of parens) {
    if (paren === "(") {
      stack.push(paren);
    } else {
      if (!stack.pop()) return false;
    }
  }

  return stack.length === 0;
}

console.log(validParentheses("()")); //              =>  true
console.log(validParentheses(")(()))")); //          =>  false
console.log(validParentheses("(")); //               =>  false
console.log(validParentheses("(())((()())())")); //  =>  true
