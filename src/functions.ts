export function getPrimes(max: any) {
  let sieve = [],
    i,
    j,
    primes = [];
  for (i = 2; i <= max; ++i) {
    if (!sieve[i]) {
      primes.push(i);
      for (j = i << 1; j <= max; j += i) {
        sieve[j] = true;
      }
    }
  }
  return primes;
}
