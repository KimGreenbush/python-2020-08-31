/*
  Given a string,
  return a new string with the duplicates excluded

  Bonus: Keep only the last instance of each character.
*/

const str1 = "abcABC"
// do the programmer magic
const expected1 = "abcABC"

const str2 = "helloo"
const expected2 = "helo"

function stringDedupe(strParam) {
  // syntax
  // where to start, iterate
  // for loop variations
  // forward / backwards / half

  // Setup
  var newStr = ""

  // Work
  // start stop step
  for (var index = 0; index <= strParam.length - 1; index++) {
    // console.log(index)
    var char = strParam[index]
    console.log(newStr.includes(char))
    if (newStr.includes(char) == false) {
      newStr += char
    }
  }
  // for (var index = strParam.length - 1; index >= 0; index--) {}
  // for(char in strParam) {}

  // var anotherIndex = 0
  // while(anotherIndex > strParam.length) {
  //   anotherIndex++
  // }

  // Return
  console.log(newStr)
  return newStr
}

// stringDedupe("hellooz")
/* ******************************************************************************** */

/*
  Given a string containing space separated words
  Reverse each word in the string.

  If you need to, use .split to start, then try to do it without.
*/

// const str1 = "hello"
// const expected1 = "olleh"

// const str2 = "hello world"
// const expected2 = "olleh dlrow"

// const str3 = "abc def ghi"
// const expected3 = "cba fed ihg"

function reverseWords(str) {
  // why use a nested loop
  // nested index
  var splitted = str.split(" ")
  console.log(splitted)
  var newStr = ""

  // Loop over each word
  for (var index = 0; index <= splitted.length - 1; index++) {
    var word = splitted[index]
    console.log(word)

    // loop over each character backwards
    for (var j = word.length - 1; j >= 0; j--) {
      console.log(word[j])
      newStr += word[j]
    }
    // only add it if it is not the last index
    newStr += " "
  }

  console.log(newStr)
  return newStr
}

reverseWords("abc def ghi")
