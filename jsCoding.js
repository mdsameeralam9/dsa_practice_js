// Object.entries method 
// with pollyfil of Object.entries
// write a function that sort argumets - like ()


//1. Object.assign
function customAssign(target, ...sources) {
    if (target === null || target === undefined) {
        throw new TypeError('Cannot convert undefined or null to object');
    }

    const to = Object(target);

    for (const source of sources) {
        if (source === null || source === undefined) continue;

        for (const key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                to[key] = source[key];
            }
        }
    }

    return to;
}

//2. json.stringyfy
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

// deep clone
function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    let clone = Array.isArray(obj) ? [] : {};

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            clone[key] = deepClone(obj[key]);
        }
    }

    return clone;
}




// 6.groupBy
function groupBy(arr, key) {
    const result = {};
    for (const item of arr) {
        const keyValue = item[key];
        if (!result.hasOwnProperty(keyValue)) {
            result[keyValue] = [];
        }
        result[keyValue].push(item);
    }
    return result;
}


// Example 1:
const users = [
{ name: 'Alice', age: 25 },
{ name: 'Bob', age: 30 },
{ name: 'Charlie', age: 25 }
];
groupBy(users, 'age');
// Output: {
//'25': [{ name: 'Alice', age: 25 }, {
//'30': [{ name: Bob', age: 30]}]
// }
