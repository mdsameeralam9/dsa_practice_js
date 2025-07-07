var promiseAll = async function(functions) {
    return new Promise((resolve, reject) => {
        let results = [];
        functions.forEach(fn => {
            fn()
            .then(val => results.push(val))
            .catch(reason => reject(reason));
        }));
        resolve(results);
    };
}

// 2
/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {

    return new Promise((resolve, reject) => {

        const results = new Array(functions.length);
        let resolvedCount = 0;

        functions.forEach((fn, index) => {
            fn()
                .then(value => {
                    results[index] = value;
                    resolvedCount++;
                    if (resolvedCount === functions.length) {
                        resolve(results);
                    }
                })
                .catch(err => {
                    reject(err); 
                });
        });

        if (functions.length === 0) resolve([]);
    });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */


//3
/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
	return async function(...args) {
        const originalFnPromise = fn(...args);

        const timeoutPromise = new Promise((_, reject) => {
            setTimeout(() => {
                reject('Time Limit Exceeded')
            }, t);
        })

        return Promise.race([originalFnPromise, timeoutPromise]);
    }
};

// 4.
/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
    
    return async function(...args) {
        return new Promise((resolve, reject) => {

            const timeout = setTimeout(() => reject("Time Limit Exceeded"), t);

            fn(...args)
                    .then((res) => {
                        clearTimeout(timeout);
                        resolve(res);
                    })
                    .catch((err) => {
                        clearTimeout(timeout);
                        reject(err);
                    });
        });
    }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
*/



//2723. Add Two Promises
/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
  // Wait for both promises to resolve and retrieve their values
  const [value1, value2] = await Promise.all([promise1, promise2]);

  // Return a new promise that resolves with the sum of the values
  return value1 + value2;
};

// // Example usage:
// var promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20));
// var promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60));

// addTwoPromises(promise1, promise2)
//   .then(console.log); // Output: 7


// mapAsyncLimit
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

const delay = (ms) => new Promise(res => setTimeout(res, ms));

async function asyncDouble(n) {
  await delay(1000);
  return n * 2;
}

mapAsyncLimit([1, 2, 3, 4, 5], 15, asyncDouble).then(console.log);
// Output: [2, 4, 6, 8, 10] (with concurrency limit of 2)