// RIOT Walk

// Repeat
// Input
// Output
// Test

// Walk-through

// Breakout room members:Mark, Shawn, Joshua, Kristen, Kahlil
// Fill out members array with name

var members = [
  "Shawn Converse",
  "Kahlil Bello",
  "Kristen San Martin",
  "Joshua Moten",
]

// ************************************************

/*
  String: Reverse

  Implement reverseString(str)
  Input: 'abc', 'abcdefghij'
  Output: 'cba'
*/
var arr = [0, 1, 2]
function reverseString(str) {
  // code                 here
  let temp = ""
  let endOfString = str.length - 1
  //                       3/ 2 = 1.5
  for (let i = 0; i < 1.5; i++) {
    temp = str[i] // i = 0, 'a'
    // a
    str[i] = str[endOfString - i] // ""
    str[str.length - i - 1] = temp
  }
  return str
}

// 0 1 2
// a b c
//temp = a
// c b c

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
  var tempStr = str.toLowerCase().split(" ")
  for (var i = 0; i < tempStr.length; i++) {
    tempStr[i] = tempStr[i].charAt(0).toUpperCase() + tempStr[i].substring(1) //uppercase the first char of every tempStr and append it by using substr at index1onwards
  }
  return tempStr.join(" ")
}

var stringAcronymTestCase = "abc"
var stringAcronymReturnValue = stringAcronym(stringAcronymTestCase)
console.log(stringAcronymReturnValue)

// WITHOUT USING.split()
// function stringAcronymManual(str, delim) {
//   let acronym = ""
//   let wordsArr = []
//   let temp = ""
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] == delim) {
//       wordsArr.push(temp)
//       temp = ""
//     } else if (i == str.length - 1) {
//       wordsArr.push(temp)
//       temp = ""
//     } else {
//       temp += str[i]
//     }
//   }
//   for (let i = 0; i < wordsArr.length; i++) {
//     acronym += wordsArr[i].toUpperCase().charAt(0)
//   }
//   return acronym
// }

//Try This
function stringAcronym(str, delim) {
  let acronym = ""
  // let wordsArr = [];
  let temp = ""
  for (let i = 0; i < str.length; i++) {
    if (str[i] == delim) {
      acronym += temp.charAt(0).toUpperCase()
      temp = ""
    } else if (i == str.length - 1) {
      acronym += temp.charAt(0).toUpperCase()
      temp = ""
    } else {
      temp += str[i]
    }
  }
  return acronym
}

var stringAcronymTestCase = "The quick brown fox, jumped over the lazy dog."
var stringAcronymReturnValue = stringAcronymManual(stringAcronymTestCase, " ")
console.log(stringAcronymReturnValue)

// ************************************************

/*
  Case insensitive string comparison

  const test1StrA = "ABC"
  const test1StrB = "abc"
  caseInsensitiveCompare(test1StrA, test1StrB) // Output: true
*/

function caseInsensitiveCompare(str1, str2) {
  str1.toLowerCase()
  str2.toLowerCase()
  if (str1 === str2) {
    return true
  } else {
    return false
  } // code here
}

var caseInsensitiveCompareTestCase = "abc"
var caseInsensitiveCompareReturnValue = stringAcronym(
  caseInsensitiveCompareTestCase
)
console.log(caseInsensitiveCompareReturnValue)
