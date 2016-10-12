function isPrime(n) {
  if (n < 2 || n % 1 !== 0) return false;
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function patternTest(arr) {
  return arr.every(isPrime);
} 