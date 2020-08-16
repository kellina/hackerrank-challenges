// 1) Initially i = 0.
// 2) If s[i] is a number swap then with last 0 (lastIndexOf) and shift the s[i].
// 3) If s[i] is uppercase and the next character s[i+1] is lowercase, swap them, remove the '*' after them, and move to i+1
// 4) Else, move to i+1
// 5) Stop if i is more than or equal to the string length.
// Complete the function decryptPassord and return the original password string before it was encrypted.

const assert = require("assert");
function decryptPassword(s) {
  s = s.split("");

  while (/\d/.test(s[0])) {
    let lastZeroIndex = s.lastIndexOf('0');
    s[lastZeroIndex] = s[0];
    s.shift();
  }

  let i = 0;
  while (i < s.length) {
    if (
      i < s.length - 1 &&
      s[i] === s[i].toUpperCase() &&
      s[i + 1] === s[i + 1].toLowerCase() &&
      /\D/.test(s[i + 1]) &&
      s[i + 2] === "*"
    ) {
      const a = s[i];
      s[i] = s[i + 1];
      s[i + 1] = a;
      s.splice(i + 2, 1);
      i++;
    }
    i++;
  }

  return s.join("");
}

assert.equal(decryptPassword("43Ah*ck0rr0nk"), "hAck3rr4nk");
