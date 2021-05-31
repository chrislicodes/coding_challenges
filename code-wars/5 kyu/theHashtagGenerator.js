"use strict";

function generateHashtag(str) {
  console.log("Input: ", str);

  str = str.replace(/\s{2,}/g, " ");

  if (str.trim() === "" || str.trim().length > 140) return false;

  let words = str.split(" ");

  const answer =
    "#" + words.map((word) => word[0].toUpperCase() + word.slice(1)).join("");

  if (answer.length > 140) return false;

  return answer;
}

generateHashtag("");
generateHashtag(" ".repeat(200));
generateHashtag("Do We have A Hashtag");
generateHashtag("Codewars");
generateHashtag("Codewars Is Nice");
generateHashtag("Codewars is nice");
generateHashtag("code" + " ".repeat(140) + "wars");
generateHashtag(
  "Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"
);
generateHashtag("a".repeat(139));
generateHashtag("a".repeat(140));
