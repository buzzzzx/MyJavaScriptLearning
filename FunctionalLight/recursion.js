function isPalindrome(str) {
  if (str.length <= 1) {
    return true;
  }
  
  if (str[0] === str[str.length - 1]) {
    return isPalindrome(str.substring(1, str.length - 1));
  } else {
    return false;
  }
}

isPalindrome("");
isPalindrome("aa");
isPalindrome("abc");
isPalindrome("abcba");