// RIOT Walk

// Repeat
// Input
// Output
// Test

// Walk-through

// Breakout room members
// Fill out members array with name

var members = ["jeffrey yi", "Gary J, Amy P." "Ling X."]

// ************************************************

/*
  String: Reverse

  Implement reverseString(str)
  Input: 'abc'
  Output: 'cba'
*/

function reverseString(str) {
  var newString= ""
 for(var i=str.length-1; i>=0; i--){

  newString += str[i]

  }

  return newString
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
  str.toUpperCase()
  var split_string = str.split();
  var letters= []
  for(let i = 0; i < split_string.length; i++){
    letters += split_string[i][0]

  }

  joinStr = letters.join()
return joinStr
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
