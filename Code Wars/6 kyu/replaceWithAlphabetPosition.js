"use strict";

function alphabetPosition(text) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  text = text
    .replace(/[^a-zA-Z]/g, "")
    .split("")
    .map(
      (letter) =>
        alphabet.findIndex((char) => char === letter.toLowerCase()) + 1
    )
    .join(" ");

  return text;
}

alphabetPosition("Das ist ein Test");
