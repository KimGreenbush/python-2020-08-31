/*
  Parens Valid

	Given an str that has parenthesis in it
	return whether the parenthesis are valid
*/
// const str1 = "Y(3(p)p(3)r)s"
// const expected1 = true

// const str2 = "N(0(p)3"
// const expected2 = false
// // Explanation: not every parenthesis is closed.

// const str3 = "N(0)t ) 0(k"
// const expected3 = false
// // Explanation: because the underlined ")" is premature: there is nothing open for it to close.

// const str4 = "a(b))(c"
// const expected4 = false
// // Explanation: same number of opens and closes but the 2nd closing closes nothing

function parensValid(str) {
  // setup
  var count = 0
  // some work
  for (let i = 0; i < str.length; i++) {
    if (count < 0) {
      return false
    }
    if (str[i] == "(") {
      count++
    }
    if (str[i] == ")") {
      count--
    }
  }
  // return something
  // if (count > 0) {
  //   return false
  // }

  // if (count == 0) {
  //   return true
  // }
  return count == 0
}

// console.log(parensValid(str1))
// console.log(parensValid(str2))
// console.log(parensValid(str3))
// console.log(parensValid(str4))
/* ******************************************************************************** */

/*
  Braces Valid

  Given a string sequence of parentheses, braces and brackets, determine whether it is valid.
*/

const str1 = "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!"
const expected1 = true

const str2 = "D(i{a}l[ t]o)n{e"
const expected2 = false

const str3 = "A(1)s[O (n]0{t) 0}k"
const expected3 = false

function bracesValid(str) {
  // Stack is FIFO
  var stack = []
  var openSymbols = "({["
  var closeSymbols = {
    ")": "(",
    "]": "[",
    "}": "{",
  }

  // read the string
  for (let i = 0; i < str.length; i++) {
    console.log("stack: ", stack)
    var char = str[i]
    console.log("char: ", char)
    // check if character is an opening symbol
    if (openSymbols.includes(char)) {
      stack.push(char)
    } else if (closeSymbols[char] == stack[stack.length - 1]) {
      // } else if ("{" == '{') {
      // try to pop from the stack
      stack.pop()
    }
  }
  // if (stack.length == 0) return true
  // if (stack.length != 0) return false
  // return false
  return stack.length == 0
}

console.log(bracesValid(str2))
