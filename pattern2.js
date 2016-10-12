function patternTest(arr) {
  return arr.every(function(num) {
    return +num > 0;
  });
} 