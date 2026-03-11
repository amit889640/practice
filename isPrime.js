/**
 * isPrime(n): returns true if n is a prime integer
 * - accepts only finite integers; returns false for non-integers
 */
function isPrime(n) {
  if (typeof n !== "number" || !Number.isFinite(n) || Math.floor(n) !== n)
    return false;
  if (n < 2) return false;
  if (n === 2 || n === 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
}

module.exports = isPrime;

// CLI usage: node isPrime.js 17 18 19
if (require.main === module) {
  const args = process.argv.slice(2);
  if (args.length === 0) {
    console.log("Usage: node isPrime.js <number> [more numbers...]");
    process.exit(0);
  }
  args.forEach((s) => {
    const num = Number(s);
    const res = isPrime(num) ? "prime" : "not prime";
    console.log(`${s} -> ${res}`);
  });
}
