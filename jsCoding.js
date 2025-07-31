// Optimized number functions

{/**
🧠 Why stop at Math.sqrt(val)?
Because every factor above the square root has a matching factor below it:

Number	  Factor        Pair
25	     (1, 25),      (5, 5)
49	     (1, 49),      (7, 7)
    
*/}

function prime(val){
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

console.log(prime(25));
console.log(prime(25));
console.log(prime(49));

function isPrime(val) {
    if (val < 2) return false;
    if (val === 2) return true;
    if (val % 2 === 0) return false;
    
    for (let i = 3; i * i <= val; i += 2) {
        console.log(i)
        if (val % i === 0) return false;
    }
    return true;
}

//console.log(isPrime(29));

















function isComposite(val) {
    return val > 3 && !isPrime(val);
}


function getPrimeTillValue(value) {
    const primes = [];
    for (let i = 2; i <= value; i++) {
        if (isPrime(i)) primes.push(i);
    }
    return primes;
}

function getCompositeTillValue(value) {
    const composites = [];
    for (let i = 4; i <= value; i++) {
        if (isComposite(i)) composites.push(i);
    }
    return composites;
}


//console.log(getCompositeTillValue(10));
