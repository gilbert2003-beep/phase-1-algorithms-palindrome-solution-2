function isPalindrome(word) {
  // Write your algorithm here
}
// index.js

function isPalindrome(str) {
  const formattedStr = str.replace(/[^a-zA-Z]/g, '').toLowerCase();
  const reversedStr = formattedStr.split('').reverse().join('');
  return formattedStr === reversedStr;
}

// Test cases
console.log(isPalindrome("abba")); // true
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("a")); // true
console.log(isPalindrome("robot")); // false
console.log(isPalindrome("ab")); // false

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
