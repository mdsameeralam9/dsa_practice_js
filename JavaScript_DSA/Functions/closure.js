//1. memoization
function memoization(fn) {
    let store = {};

    return function (...args) {
        const key = JSON.stringify(args);
        if (store[key]) {
            console.log("return value from cache")
            return store[key];
        }

        // make function call 
        const value = fn(...args);
        store[key] = value;

        // some delay
        for (let index = 0; index < 10000000; index++) {
        }

        console.log("return value from calculating")
        return value
    }
}

// second approach
function memoize(fn) {
    const cache = new Map();
    return function (...args) {
        // Create a reliable cache key
        const key = args.map(arg => {
            if (typeof arg === 'object' && arg !== null) {
                return JSON.stringify(Object.entries(arg).sort());
            }
            return JSON.stringify(arg);
        }).join('|');

        console.log("key ===>",key)
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = fn(...args);
        cache.set(key, result);
        return result;

    };
}


