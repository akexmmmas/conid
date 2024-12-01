let constRaised = 10;
const prime = 3;

constRaised %= prime; // This is equivalent to: constRaised = constRaised % prime;

console.log(constRaised); // Output: 1 (since 10 % 3 equals 1)
