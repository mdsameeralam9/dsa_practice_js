{/**
1. suffle an Array
2. create array on n length
3. generate random number

*/}

// 1. suffle an Array
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// second approach
const shuffled = arr.sort(() => Math.random() - 0.5);


//2. 🧱 Ways to Create an Array of Length n with Index Values
const arr = (n = 10)  => Array.from({ length: n }, (_, i) => i);
const arr2 = [...Array(10).keys()]
const arr3 = (n = 10)  => Array(n).fill().map((_, i) => i);
const arr4 = Array.apply(null, { length: 10 }).map((_, i) => i);
const arr5 = (n = 10)  => Object.keys([...Array(n)]);
const arr6 = Array.from(Array(10).keys());
// using for loop
const arr7 = [];
for (let i = 0; i < n; i++) {
  arr.push(i);
}

// 3 generate random number of n digit and between two value
function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Example: Between 50 and 100
console.log(randomBetween(50, 100)); // e.g., 73

// 4 📋 Ways to Copy an Array
const copy = [...original];
const copy2 = original.slice();
const copy3 = Array.from(original);
const copy4 = [].concat(original);
const copy5 = original.map(x => x);
const copy6 = JSON.parse(JSON.stringify(original));







