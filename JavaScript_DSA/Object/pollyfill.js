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

Object.myAssign = function (target, ...sources) {
  if (target === null || typeof target !== 'object') {
    throw new TypeError('Target must be a non-null object');
  }

  const to = Object(target);

  for (const source of sources) {
    if (source === null || typeof source !== 'object') continue;

    for (const key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        to[key] = source[key];
      }
    }
  }

  return to;
};


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


// 4. Objec
function myEntries(obj) {
  if (obj === null || typeof obj !== "object") {
    throw new TypeError("Object.entries called on non-object");
  }

  const result = [];
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result.push([key, obj[key]]);
    }
  }

  return result;
}


//5. json.stringyfy
function JSONStringify(value) {
    const seen = new Set();

    function stringify(val) {
        if (val === null) return "null";

        const type = typeof val;

        if (type === "string") return `"${val}"`; // Strings need to be quoted
        if (type === "number" || type === "boolean") return String(val);
        if (type === "function" || type === "undefined") return undefined;

        if (Array.isArray(val)) {
            const res = val.map(item => {
                const str = stringify(item);
                return str === undefined ? "null" : str;
            });
            return `[${res.join(",")}]`;
        }

        if (type === "object") {
            if (seen.has(val)) throw new TypeError("Converting circular structure to JSON"); // Complete error message
            seen.add(val);

            const props = Object.entries(val)
                .map(([key, itemVal]) => { // Renamed 'val' to 'itemVal' for clarity within map
                    const strVal = stringify(itemVal);
                    if (strVal === undefined) return undefined;
                    return `"${key}":${strVal}`; // Key needs to be quoted, then colon, then value
                })
                .filter(prop => prop !== undefined); // Filter out undefined properties

            seen.delete(val); // Remove from seen after processing to allow for other references

            return `{${props.join(",")}}`; // Join properties with comma and wrap in curly braces
        }
        return undefined; // Fallback for unhandled types
    }

    return stringify(value);
}



