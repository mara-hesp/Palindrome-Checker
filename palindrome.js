// Return true if the given string is a palindrome. Otherwise, return false.
// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
// Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

function palindrome(str) {

  let low = str.toLowerCase()
  let regex = /[a-z0-9]/gi
  let check = low.match(regex)
  let clean = check.join('')

  if (low === low.split('').reverse().join('') || clean === clean.split('').reverse().join('')) {
    return true
  }

  return false

}

palindrome("eye");
console.log(palindrome("eye")) // return true
console.log(palindrome("My age is 0, 0 si ega ym.")) // return true
console.log(palindrome("0_0 (: /-\ :) 0-0")) // return true
console.log(palindrome("1 eye for of 1 eye.")) // return false
