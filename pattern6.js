function patternTest(arr) {
  return arr.every(function(chr) {
    return /[JFMASOND]/i.test(chr);
  });
} 