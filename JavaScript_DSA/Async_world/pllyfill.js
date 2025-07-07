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