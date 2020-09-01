// RIOT Walk

// Repeat
// Input
// Output
// Test

// Walk-through

// Breakout room members
// Fill out members array with name

var members = ["Kim", "Chrisc", "MRo", "jason", "Nate"]

// ************************************************

/*
  String: Reverse

  Implement reverseString(str)
  Input: 'abc'
  Output: 'cba'
*/

function reverseString(str) {
  // code here
  var newString = ""
  for (var i = str.length - 1; i >= 0; i--) {
    newstring += str[i]
  }
  return newString
}
reversedString = reverseString("abc")
console.log(reverseString("abc"))
//var reverseStringTestCase = "abc"
//var reverseStringReturnValue = reverseString(reverseStringTestCase)
//console.log(reverseStringReturnValue)

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
  var newString = str.split("")
  for (var i = 0; i < str.length; i++) {
    newString += str[i][0]
  }
  console.log(newString)
}

var stringAcronymTestCase = "abc"
var stringAcronymReturnValue = stringAcronym(stringAcronymTestCase)
console.log(stringAcronymReturnValue)

//function stringAcronym(str) {
function stringAcronym(str) {
  var tempString = str.split(" ", 9)
  console.log(tempString[0][0])
  var newString = ""
  for (var i = 0; i < tempString.length; i++) {
    newString += tempString[i][0]
  }
  console.log(newString)
}
acro = stringAcronym("The quick brown fox, jumped over the lazy dog")

var stringAcronymTestCase = "The Quick Brown Fox"
var stringAcronymReturnValue = stringAcronym(stringAcronymTestCase)
console.log(stringAcronymReturnValue) //

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
