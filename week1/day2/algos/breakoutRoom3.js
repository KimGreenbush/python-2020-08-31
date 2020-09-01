// RIOT Walk

// Repeat
// Input
// Output
// Test

// Walk-through

// Breakout room members
// Fill out members array with name

var members = ["Luis Cardona, Stephen Lebel, Vikram Malhotra"]

// 1. starting variables
// 2. condition/control to check each iteration
// 3. step, something to do after
// for (start; stop; step) {

for (var i = 0; i < 100; i++) {
  console.log(i)
}
// ************************************************

/*
  String: Reverse

  Implement reverseString(str)
  Input: 'abc'
  Output: 'cba'
*/

function reverseString(str) {
  // loop for
  var newstring = ""
}

var reverseStringTestCase = "abc"
var reverseStringReturnValue = reverseString(reverseStringTestCase)
console.log(reverseStringReturnValue)

//luisCardona
function reverseString(str) {
  var revS = ""
  //              2       3>=0   i--
  for (var i = str.length - 1; i >= 0; i--) {
    console.log(str[i])
    revS = revS + str[i]
    // revS += str[i]
    // console.log(revS)
  }

  console.log("revS: ", revS)
  return revS
}
//                                   012
var someReturnValue = reverseString("abc")
console.log("someReturnValue: ", someReturnValue)
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
}

var stringAcronymTestCase = "abc"
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
