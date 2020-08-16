const assert = require("assert");

// Given string s, let s[i] represent the ith character in the string s, using 0-based indexing.
// 1) Initially i = 0.
// 2) If s[i] is lowercase and the next character s[i+1] is uppercase, swap them, add a '*' after them, and move to i+2
// 3) If s[i] is a number, replace it with 0, put the original number at the beginning and move to i + 1.
// 4) Else, move to i+1
// 5) Stop if i is more than or equal to the string length.
// Complete the function decryptPassord and return the original password string before it was encrypted.

function encryptPassword(s) {
  s = s.split("");
  let i = 0;
  while (i < s.length) {
    if (/\d/.test(s[i])) {
      s.unshift(s[i]);
      s[i + 1] = 0;
      i++;
    } else if (
      i < s.length - 1 &&
      s[i] === s[i].toLowerCase() &&
      s[i + 1] === s[i + 1].toUpperCase() &&
      /\D/.test(s[i+1])
    ) {
      const a = s[i];
      s[i] = s[i + 1];
      s[i + 1] = a;
      s.splice(i + 2, 0, "*");
      i++;
    }
    i++;
  }
  return s.join("");
}

assert.equal(encryptPassword("hAck3rr4nk"), "43Ah*ck0rr0nk");
