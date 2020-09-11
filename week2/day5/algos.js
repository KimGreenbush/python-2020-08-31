/*
  Given an array of objects / dictionaries to represent new inventory,
  and an array of objects / dictionarys to represent current inventory,
  update the quantities of the current inventory

  if the item doesn't exist in current inventory, add it to the inventory

  return the current inventory after updating it.
*/

// const newInv1 = [
//   { name: "Grain of Rice", quantity: 9000 },
//   { name: "Peanut Butter", quantity: 50 },
//   { name: "Royal Jelly", quantity: 20 },
// ]
// const currInv1 = [
//   { name: "Peanut Butter", quantity: 20 },
//   { name: "Grain of Rice", quantity: 1 },
// ]
// const expected1 = [
//   { name: "Peanut Butter", quantity: 70 },
//   { name: "Grain of Rice", quantity: 9001 },
//   { name: "Royal Jelly", quantity: 20 },
// ]

// const newInv2 = []
// const currInv2 = [{ name: "Peanut Butter", quantity: 20 }]
// const expected2 = [{ name: "Peanut Butter", quantity: 20 }]

// const newInv3 = [{ name: "Peanut Butter", quantity: 20 }]
// const currInv3 = []
// const expected3 = [{ name: "Peanut Butter", quantity: 20 }]

function updateInventory(newInv, currInv) {}

/* ******************************************************************************** */

/*
  An anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
  typically using all the original letters exactly once.

  Is there a quick way to determine if they aren't an anagram before spending more time?

  Given two strings
  return whether or not they are anagrams
*/

// const strA1 = "yes"
// const strB1 = "eys"
// const expected1 = true

// const strA2 = "yes"
// const strB2 = "eYs"
// const expected2 = true

// const strA3 = "no"
// const strB3 = "noo"
// const expected3 = false

const strA4 = "silent"
const strB4 = "listen"
const expected4 = true

function isAnagram(s1, s2) {
  if (s1.length !== s2.length) {
    return false
  }
  // if (s1.length !== s2.length) return false

  // return s1.length !== s2.length

  var freq1 = {}
  var freq2 = {}
  // loop through strings
  for (let i = 0; i < s1.length; i++) {
    // track letter frequency
    var singleLetterS1 = s1[i]
    if (freq1.hasOwnProperty(singleLetterS1)) {
      freq1[singleLetterS1] += 1
    } else {
      freq1[singleLetterS1] = 1
    }

    // track letter frequency
    var singleLetterS2 = s2[i]
    if (freq2.hasOwnProperty(singleLetterS2)) {
      freq2[singleLetterS2] += 1
    } else {
      freq2[singleLetterS2] = 1
    }
  }
  console.log(`freq1: `, freq1)
  console.log(`freq2: `, freq2)

  // verify that the objects have the same key values
  for (var key in freq1) {
    var value = freq1[key]
    console.log(key, value)

    if (freq2.hasOwnProperty(key) === false) {
      return false
    }

    if (freq1[key] !== freq2[key]) {
      return false
    }
  }

  return true
}

console.log(isAnagram("silenteeecc", "listencccee"))
