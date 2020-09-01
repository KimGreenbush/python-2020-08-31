// RIOT Walk

// Repeat
// Input
// Output
// Test

// Walk-through

// Breakout room members
// Fill out members array with name

var members = [
  "Ben B",
  "Josh Cornell",
  "Paul",
  "Raoul Soumah",
  "Jakeya Jake French",
]

// ************************************************

/*
  String: Reverse

  Implement reverseString(str)
  Input: 'abc'
  Output: 'cba'
*/

function reverseString(str) {
  // code here
  var newStr = ""
  for (var i = 0; i < str.length; i++) {
    newStr = newStr + str[str.length - i - 1]
  }
  return newStr
}

var reverseStringTestCase = "abc"
var reverseStringReturnValue = reverseString(reverseStringTestCase)
console.log(reverseStringReturnValue)

// ************************************************

/*
  Acronyms

  Create a function that, given a string, returns the string’s acronym
  (first letter of each word capitalized).

  Do it with .split first if you need to, then try to do it without

  input: 'The quick brown fox, jumped over the lazy dog.'
  output: 'TQBFJOTLD'

  Hint: string.toUpperCase()

*/

function stringAcronym(str) {
  // code here
  newStr = str.split(" ")
  acro = ""
  for (var i = 0; i < newStr.length; i++) {
    acro = acro + newStr[i][0]
  }
  return acro.toUpperCase()
}

var stringAcronymTestCase = "The quick brown fox, jumped over the lazy dog"
var stringAcronymReturnValue = stringAcronym(stringAcronymTestCase)
console.log(stringAcronymReturnValue)

// ************************************************

/*
  Case insensitive string comparison

  const test1StrA = "ABC"
  const test1StrB = "abc"
  caseInsensitiveCompare(test1StrA, test1StrB) // Output: true
*/

function caseInsensitiveCompare(str1, str2) {
  // code here
}

var caseInsensitiveCompareTestCase = "abc"
var caseInsensitiveCompareReturnValue = stringAcronym(
  caseInsensitiveCompareTestCase
)
console.log(caseInsensitiveCompareReturnValue)
