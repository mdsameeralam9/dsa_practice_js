// 1. deepcopy of an Object with and without in-build methods
function deepCopy(obj) {
  // Handle null or non-object types (primitives)
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  // Handle arrays
  if (Array.isArray(obj)) {
    const copy = [];
    for (let i = 0; i < obj.length; i++) {
      copy[i] = deepCopy(obj[i]);
    }
    return copy;
  }

  // Handle plain objects
  const copy = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepCopy(obj[key]);
    }
  }
  return copy;
}

function deepCopy1(obj){
    return JSON.parse(JSON.stringify(obj))
}


{/**
    🧠 What is a Circular Reference?
A circular reference happens when an object refers to itself directly or indirectly. This can cause infinite loops in naive deep copy functions.
    
const obj = {};
obj.self = obj; // circular reference

console.log(obj.self.self.self === obj); // true

*/}

function deepCopy(obj, seen = new Map()) {
    // Handle null or primitive types
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    // If object is already copied, return the reference
    if (seen.has(obj)) {
        return seen.get(obj);
    }

    // Handle arrays
    if (Array.isArray(obj)) {
        const copy = [];
        seen.set(obj, copy);
        for (let i = 0; i < obj.length; i++) {
            copy[i] = deepCopy(obj[i], seen);
        }
        return copy;
    }

    // Handle plain objects
    const copy = {};
    seen.set(obj, copy);
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            copy[key] = deepCopy(obj[key], seen);
        }
    }
    return copy;
}


