// number - factorial
function factorial(n) {
  if (n < 0) return undefined;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(5)); // Output: 120

// 2
function isPrime(value){
  if(value < 2) return false;
  for(let i=2; i<value; i++){
    if(value%i === 0) return false;
  }
  return true
}

function getPrimeNUmbers(till=10){
  let result = []
  for(let i=0; i<=till; i++){
    if(isPrime(i)){
      result.push(i)
    }
  }

  return result
}
console.log(getPrimeNUmbers())

// 3 composite 
function isComposite(num) {
  if (num < 4) return false; // 0 and 1 are not composite

  for (let i=2; i <num; i++) {
    if (num % i === 0) {
      return true; // Found a divisor other than 1 and itself
    }
  }

  return false; // No divisors found, so it's prime
}

function printCompositeUpTo(limit) {
  let composites = [];
  for (let i = 1; i <= limit; i++) {
    if (isComposite(i)) {
      composites.push(i);
    }
  }
 return composites
}

console.log(printCompositeUpTo(10));


// 4 fabinachi
function fabinachi(till=10){
 let first =0, second=1
 let arr = [first, second];

 for(let i=2; i<=till; i++){
  let third = first+second;
  arr.push(third);
  first = second;
  second = third
 }

 return arr
}
console.log(fabinachi())

//generateRandomNumber
function generateRandomNumber(min, max){
  return Math.floor(Math.random()*(max-min+1))+min
}
console.log(generateRandomNumber(10, 100))

//generateRandomNumberOfNLength
function generateRandomNumberOfNLength(n){
  let randomValue = ''
  let string = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*';
  for(let i=0; i<=n; i++){
    let randomIndex = Math.floor(Math.random()*(string.length-1+1));
    const char = string[randomIndex];
    if(!randomValue.includes(char)){
      randomValue += char;
    }
  }
  return randomValue
}

console.log(generateRandomNumberOfNLength(10))

