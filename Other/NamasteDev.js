// 1. implemnt a stack data structure, with pop,push,shift, unshift, peek, isEmpty,clear
function splitPath(path) {
  const parts = [];
  let buffer = '';

  for (let i = 0; i < path.length; i++) {
    const char = path[i];

    if (char === '.' || char === '[') {
      if (buffer) {
        parts.push(buffer);
        buffer = '';
      }
    } else if (char === ']') {
      if (buffer) {
        parts.push(buffer);
        buffer = '';
      }
    } else {
      buffer += char;
    }
  }

  if (buffer) parts.push(buffer);

  return parts;
}
console.log(splitPath("data.results[1].status[0].type"))
// [ "data", "results", "1", "status","0", "type"]


function parseString(str) {
    const res = [];
    let strCom = ""
    let count = 0
    
    for (const char of str) {
        count++;
        if(char !== '' && !['.', '[', ']'].includes(char)){
          strCom += char
        }

        if(strCom !== ''){
            if(char === '.' || char === '[' || char === "]" || str.length === count){
                res.push(strCom)
                strCom = ""
            }
        }
    
    }

    return res;
}

// [data, status, new,0,current]
console.log(parseString('data.status.new[0].current'))

function parseString(str) {
    const res = [];
    let token = "";

    for (const char of str) {
        if (char === '.' || char === '[' || char === ']') {
            if (token) {
                res.push(token);
                token = "";
            }
        } else {
            token += char;
        }
    }

    if (token) {
        res.push(token);
    }

    return res;
}

console.log(parseString('data.status.new[0].current'));
// Output: ["data", "status", "new", "0", "current"]




// 2
function debounce(fn, delay) {
    let timerId;
    return function (...args) {
        if (timerId) {
            clearTimeout(timerId);
        }
        timerId = setTimeout(() => {
            fn(...args);
        }, delay);
    };
}

// trottle 
function throttle(func, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - lastCall >= delay) {
      lastCall = now;
      func.apply(this, args);
    }
  };
}



const debouncedLog = debounce((msg) => console.log("Logged:", msg), 1000);

debouncedLog("Hello");
debouncedLog("World"); // Only this will be logged after 1 second


function mergeData(arr1, arr2) {
  // Your implementation;

  const uniqObj = new Map();

  for(const obj of arr1){
    uniqObj.set(obj.id, {...obj})
  }

  console.log(uniqObj);
  for(const obj of arr2){
    if(uniqObj.has(obj.id)){
      uniqObj.set(obj.id, {...uniqObj.get(obj.id),...obj})
    }else {
      uniqObj.set(obj.id, {...obj})
    }
  }

  return Array.from(uniqObj.values())
}

//For the purpose of user debugging.
//pass your arrays in function call

const array1 = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30, educ: "15th" },
  { id: 3, name: "Charlie", age: 22 }
];


const array2 = [
  { id: 3, name: "David", age: 28 },
  { id: 1, name: "Eva", age: 26, school: "cps" },
  { id: 4, name: "Frank", age: 31 }
];

console.log(mergeData(array1, array2))

// promise.all
function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    const results = [];
    let completed = 0;

    promises.forEach((p, i) => {
      Promise.resolve(p)
        .then(value => {
          results[i] = value;
          completed++;
          if (completed === promises.length) {
            resolve(results);
          }
        })
        .catch(reject); // Reject immediately on any failure
    });

    if (promises.length === 0) resolve([]);
  });
}

// promise.allSettled
function promiseAllSettled(promises) {
  return new Promise(resolve => {
    const results = [];
    let completed = 0;

    promises.forEach((p, i) => {
      Promise.resolve(p)
        .then(value => {
          results[i] = { status: 'fulfilled', value };
        })
        .catch(reason => {
          results[i] = { status: 'rejected', reason };
        })
        .finally(() => {
          completed++;
          if (completed === promises.length) {
            resolve(results);
          }
        });
    });

    if (promises.length === 0) resolve([]);
  });
}


// promise.any
function promiseAny(promises) {
  return new Promise((resolve, reject) => {
    const errors = [];
    let rejectedCount = 0;

    promises.forEach((p, i) => {
      Promise.resolve(p)
        .then(resolve)
        .catch(error => {
          errors[i] = error;
          rejectedCount++;
          if (rejectedCount === promises.length) {
            reject(new AggregateError(errors, 'All promises were rejected'));
          }
        });
    });

    if (promises.length === 0) {
      reject(new AggregateError([], 'All promises were rejected'));
    }
  });
}



// promise.rac pollyfill
function promiseRace(promises) {
  return new Promise((resolve, reject) => {
    promises.forEach(promise => {
      Promise.resolve(promise).then(resolve, reject)
    });
  });
}




const p1 = new Promise(resolve => setTimeout(() => resolve('First'), 3000));
const p2 = new Promise(resolve => setTimeout(() => resolve('Second'), 1000));
const p3 = new Promise((_, reject) => setTimeout(() => reject('Error'), 2000));

promiseRace([p1, p2, p3])
  .then(result => console.log('Resolved with:', result))
  .catch(error => console.error('Rejected with:', error));

function myStringify(value) {
  if (value === null) return 'null';

  const type = typeof value;

  if (type === 'number' || type === 'boolean') {
    return String(value);
  }

  if (type === 'string') {
    return `"${value.replace(/"/g, '\\"')}"`;
  }

  if (Array.isArray(value)) {
    const elements = value.map(el => myStringify(el) || 'null');
    return `[${elements.join(',')}]`;
  }

  if (type === 'object') {
    const entries = Object.entries(value)
      .filter(([key, val]) => typeof val !== 'undefined' && typeof val !== 'function' && typeof val !== 'symbol')
      .map(([key, val]) => `"${key}":${myStringify(val)}`);
    return `{${entries.join(',')}}`;
  }

  return undefined; // for functions, undefined, symbols
}


function formatList(items) {
  if (items.length === 0) return "";
  // your implementation
  let result = '';
  let count = 0
  for (const item of items) {
    if (items === 1) {
      result = item;
      return result
    } else if (items.length === 2) {
      result = `${items[0]} and ${items[1]}`
      return result
    } else {
      count++;
      if (count + 1 === items.length) {
        result += `${item} and `
      } else if (count === items.length) {
        result += item
      }
      else {
        result += `${item},`
      }
    }
  }

  return result
}

//For the purpose of user debugging.
console.log(formatList(["apple", "banana", "apple", "banana", "", "moring"]))




//
async function mapAsyncLimit(arr, limit, asyncFn) {
  const results = [];
  let i = 0;

  const workers = new Array(limit).fill(null).map(async () => {
    while (i < arr.length) {
      const currentIndex = i++;
      results[currentIndex] = await asyncFn(arr[currentIndex]);
    }
  });

  await Promise.all(workers);
  return results;
}


// const delay = (ms) => new Promise(res => setTimeout(res, ms));

// async function asyncDouble(n) {
//   await delay(1000);
//   return n * 2;
// }

// mapAsyncLimit([1, 2, 3, 4, 5], 15, asyncDouble).then(console.log);
// // Output: [2, 4, 6, 8, 10] (with concurrency limit of 2)

// Object.assign 
function objectAssign(target, ...restObject){
    if(target === null || target === undefined) throw new Error(`cannot convet null or undefined to object`);
  for(const obj of restObject){
    if(typeof obj === 'object') {
      target = {...target, ...obj}
    }
  }
  return target
}


console.log(objectAssign({name: "Sameer", add: "samp"}, {age: 20},2 , 'hello', {add: "mudapue"}, {a: 1, 8:"eight"}));

console.log(Object.assign(2 , 'hello', {add: "mudapue"}, {a: 1, 8:"eight"}))


// freeze 
function deepFreeze(obj) {
  Object.getOwnPropertyNames(obj).forEach(prop => {
    if (typeof obj[prop] === 'object' && obj[prop] !== null) {
     deepFreeze(obj[prop]);
    }
  });
  return Object.freeze(obj);
}


const objg = {name: "Sameer", age: 30, add: {city: "Samastipur"}};


function myOwnFreeze(obj){

  for(const key in obj){
    const objct = obj[key];

    if(typeof objct === "object"){
      myOwnFreeze(objct)
    }
  }

  return Object.freeze(obj)
}

const freOnk = myOwnFreeze(objg);
freOnk.name = "ddddd"
freOnk.add.city = "ddddd"
console.log(freOnk)


function objectAssign(target, ...sources) {
  if (target == null) {
    throw new TypeError('Cannot convert undefined or null to object');
  }

  const to = Object(target);

  for (const source of sources) {
    if (source != null) {
      for (const key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          to[key] = source[key];
        }
      }
    }
  }

  return to;
}


const obj = {name: "Md Aameer", age: 30, add: {city: "Samastipur"}}

console.log(Object(obj))

