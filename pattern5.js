function patternTest(arr) {
  return arr.every(function(chr) {
    return /[BCDFGHJKLMNPQRSTVWXYZ]/i.test(chr);
  });
} 