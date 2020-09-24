/*
  Sum To One Digit
  Implement a function sumToOne(num)​ that,
  given a number, sums that number’s digits
  repeatedly until the sum is only one digit. Return
  that final one digit result.

  Tips:
    to access digits from a number, need to convert it .toString() to access each digit via index
    parseInt(arg) returns arg parsed as an integer, or NaN if it couldn't be converted to an int
    isNaN(arg) used to check if something is NaN
*/

const num1 = 5
const expected1 = 5

const num2 = 10
const expected2 = 1

const num3 = 25
const expected3 = 7

const num4 = 156 // 1+5+6 = 12 -> 1+2 = 3
const expected4 = 3

function sumToOneDigit(n) {
  console.log(n)
  // Termination Condition if it's bad data (not a number)
  if (isNaN(parseInt(n))) {
    return null
  }

  // base case: return solution
  if (n < 10) {
    return n
  }

  const strNum = n.toString()
  let sum = 0

  for (const strDigit of strNum) {
    sum += parseInt(strDigit)
  }

  return sumToOneDigit(sum)
}

console.log(sumToOneDigit(num4))
