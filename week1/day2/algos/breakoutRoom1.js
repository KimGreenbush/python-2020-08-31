// RIOT Walk

// Repeat
// Input
// Output
// Test

// Walk-through

// ************************************************

/*
  String: Reverse

  Implement reverseString(str)
  Input: 'abc'
  Output: 'cba'
*/

function reverseString(str) {
  var newStr = ""
  for (var x = str.length - 1; x >= 0; x--) {
    newString += str[x]
  }
  return newStr
}

var reverseStringTestCase = "abc"
var reverseStringReturnValue = reverseString(reverseStringTestCase)
console.log(reverseStringReturnValue)

// ************************************************
// def reverse(str):
//   str = ""
//   for i in s:
//     str = i + str
//   return str

// #splicing
// 'hello world'[::-1]

/*
  Acronyms

  Create a function that, given a string, returns the string’s acronym
  (first letter of each word capitalized).

  Do it with .split first if you need to, then try to do it without

  input: 'The quick brown fox, jumped over the lazy dog.'
  output: 'TQBFJOTLD'

  Hint: string.toUpperCase()

*/

function stringAcronym0(str) {
  let result = "",
    grabFirst = true
  for (let i = 0; i < str.length; i++) {
    if (
      grabFirst &&
      ((str >= "a" && str <= "z") || (str >= "A" && str <= "Z"))
    ) {
      result += str[i].toUpperCase()
      grabFirst = false
    } else if (str[i] == " ") {
      grabFirst = true
    }
  }
  return result
}

function stringAcronym(str) {
  let words = str.split(" ")
  // split is a function attached to string objects that breaks it into an array
  // it takes a delimiting character as an argument indicating where each split occurs.
  let result = ""
  for (let i = 0; i < words.length; i++) {
    result += words[i][0].toUpperCase()
  }
  return result
}

var stringAcronymTestCase = "The quick brown fox, jumped over the lazy dog."
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
  return str1.toUpperCase() == str2.toUpperCase()
}

var caseInsensitiveCompareTestCase = "abc"
var caseInsensitiveCompareReturnValue = stringAcronym(
  caseInsensitiveCompareTestCase
)
console.log(caseInsensitiveCompareReturnValue)
