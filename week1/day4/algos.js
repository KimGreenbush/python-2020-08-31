/*
  String: Is Palindrome

  Create a function that returns a boolean whether the string is a strict palindrome.
    - palindrome = string that is same forwards and backwards

  Do not ignore spaces, punctuation and capitalization
 */

// const str1 = "a x a"
// const expected1 = true

// const str2 = "racecar"
// const expected2 = true

// const str3 = "Dud"
// const expected3 = false

// //            0123
// const str4 = "oho!"
// const expected4 = false

function isPalindrome(str) {
  // set up
  var backwardsString = ""
  // do some work (probably repetative)
  // start stop step
  // forward
  // for (var index = 0; index < str.length; index++) {
  // backwards
  for (var index = str.length - 1; index >= 0; index--) {
    var character = str[index]
    // console.log(character)
    backwardsString = backwardsString + character
  }
  // clean up
  // return something
  return backwardsString === str
}

// var valueThatTheFunctionReturned = isPalindrome(str2)
// console.log(valueThatTheFunctionReturned)

/* ******************************************************************************** */

/*
  Longest Palindrome

  For this challenge, we will look not only at the entire string provided, but also at the substrings within it. Return the longest palindromic substring.

  Strings longer or shorter than complete words are OK.

  All the substrings of "abc" are:
  a, ab, abc, b, bc, c
*/

// const str1 = "what up, daddy-o?"
// const expected1 = "dad"

// const str2 = "uh, not much"
// const expected2 = "u"

// const str3 = "Yikes! my favorite racecar erupted!"
// const expected3 = "e racecar e"

function longestPalindromicSubstring(str) {
  // set the longest palindrome
  var longestPalindrome = str[0]

  // read the str
  for (var outterIndex = 0; outterIndex < str.length; outterIndex++) {
    // check if a peice of it is a palidrome
    console.log("outterIndex: ", outterIndex)
    for (
      var innerIndex = outterIndex + 1;
      innerIndex < str.length;
      innerIndex++
    ) {
      console.log("innerIndex: ", innerIndex)
      // if peice the longest
      var pizzaSlice = str.slice(outterIndex, innerIndex)
      // if it is a palindrome
      console.log("pizzaSlice: ", pizzaSlice)
      if (isPalindrome(pizzaSlice)) {
        // if (longestPalindrome.length < pizzaSlice.length)
        if (pizzaSlice.length > longestPalindrome.length) {
          longestPalindrome = pizzaSlice
          console.log("Found a long pizza!")
        }
      }
    }
    console.log("************************")
  }
  // return the longest palindrome
  return longestPalindrome
}
const str1 = "what up, daddy-o?"
const expected1 = "dad"

var answer = longestPalindromicSubstring(str1)
console.log(answer)
