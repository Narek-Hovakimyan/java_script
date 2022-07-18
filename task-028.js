function stringIsPalindrome(str) {
    return str.split('').reverse().join('') === str
}
console.log(stringIsPalindrome('pop'));