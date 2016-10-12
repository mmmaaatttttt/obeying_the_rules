function charTest(regex, chr) {
  return regex.test(chr);
}

function patternTest(arr) {
  return (arr.every(charTest.bind(this, new RegExp("[QWERTYUIOP]","i"))) ||
          arr.every(charTest.bind(this, new RegExp("[ASDFGHJKL]", "i"))) ||
          arr.every(charTest.bind(this, new RegExp("[ZXCVBNM]", "i"))));
} 