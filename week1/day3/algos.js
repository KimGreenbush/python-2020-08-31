/*
  Given an arr and a separator string, output a string of every item in the array separated by the separator.

  No trailing separator at the end
  Default the separator to a comma with a space after it if no separator is provided
*/

// var arr1 = [1, 2, 3]
// var separator1 = ", "
// var expected1 = "1, 2, 3"

// var arr2 = [1, 2, 3]
// var separator2 = "-"
// var expected2 = "1-2-3"

// var arr3 = [1, 2, 3]
// var separator3 = " - "
// var expected3 = "1 - 2 - 3"

// var arr4 = [1]
// var separator4 = ", "
// var expected4 = "1"

// var arr5 = []
// var separator5 = ", "
// var expected5 = ""

function join(arr, separator) {
  // code here
}

/* ******************************************************************************** */

/*
  String Encode

  You are given a string that may contain sequences of consecutive characters.
  Create a function to shorten a string by including the character,
  then the number of times it appears.


  // If final result is not shorter (such as "bb" => "b2" ),
  // return the original string.
  */

// var str1 = "aaaabbcddd"
// var expected1 = "a4b2c1d3"

// var str2 = ""
// var expected2 = ""

// var str3 = "aa"
// var expected3 = "a2"

// var str4 = "bbcc"
// var expected4 = "b2c2"

function encodeStr(str) {
  // pseudo code
  // if (str.length < ) {
  //   return str
  // }

  // count something
  var letterCount = 1
  var newStr = ""

  // loop to read the string
  for (var index = 0; index < str.length; index++) {
    console.log(str[index])
    // compare current value to next value
    if (str[index] == str[index + 1]) {
      // if same letterCount++
      console.log("same value")
      letterCount++
      // letterCount += 1
      // letterCount = letterCount + 1
    } else {
      // else str+= letterCount
      console.log("NOT same value")
      newStr = newStr + str[index] + letterCount
      letterCount = 1
    }
  }

  // return a new string
  return newStr
}

// var returnValue = encodeStr(str3)
// console.log("returnValue: ", returnValue)
/* ******************************************************************************** */

/*
  String Decode
*/

// case for max number of 9
var str1 = "a3b2c1d3"
var expected1 = "aaabbcddd"

function decodeStr(str) {
  // code here
  // newStr variable
  var newStr = ""

  // loop through string
  for (var i = 0; i < str.length; i += 2) {
    // step by 2
    console.log(str[i])
    // add number of i's by the number of i's +1
    //                         '3'
    // newStr += str[i].repeat(str[i + 1])
    newStr += str[i].repeat(parseInt(str[i + 1]))
  }

  console.log(newStr)
  return newStr
}
// decodeStr(str1)

// case for number more than 9
var str2 = "a13 b22 c1 d3"
var expected2 = "a*13 b*22 c*1 d*3"

function decodeStr2(str) {
  // var returnStr = ''
  // var tempStr = ''
  // for (var i = 0; i < str.length; i++) {
  //   // if str[i] == Number
  //   // typeof()
  //   if () {
  //     //
  //   }
  // }
}
