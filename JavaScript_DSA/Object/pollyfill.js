// 1. myStringify
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


//2. Object.assign 
function objectAssign(target, ...restObject){
    if(target === null || target === undefined) throw new Error(`cannot convet null or undefined to object`);
  for(const obj of restObject){
    if(typeof obj === 'object') {
      target = {...target, ...obj}
    }
  }
  return target
}

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

console.log(objectAssign({name: "Sameer", add: "samp"}, {age: 20},2 , 'hello', {add: "mudapue"}, {a: 1, 8:"eight"}));
console.log(Object.assign(2 , 'hello', {add: "mudapue"}, {a: 1, 8:"eight"}))


// 3. freeze
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


// 4. 