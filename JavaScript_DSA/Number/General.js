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

// Optimized number functions

{/**
🧠 Why stop at Math.sqrt(val)?
Because every factor above the square root has a matching factor below it:

Number	  Factor        Pair
25	     (1, 25),      (5, 5)
49	     (1, 49),      (7, 7)
    
*/}

function primeOptimised(val){
    if (val < 2) return false;
    if (val === 2) return true;
    if (val % 2 === 0) return false; // this is for even number before loop it return the value;
    for (let i = 3; i<=Math.sqrt(val); i+=2) {
        // i+=2 => increment BY 2 beacuse except 2 all prime is odd number
        // i = 3 => start from 3 , 2 is already return prime and only even;
        // i <= Math.sqrt(val) =>  ABOVE 
        // i*i <= val => either double the i to compare and decrease loop and same as . 
        if (val % i === 0) {
           return false
        };
    }
    return true;
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


