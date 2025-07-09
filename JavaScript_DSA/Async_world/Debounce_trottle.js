/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function(fn, t) {

    let id;
    
    return function(...args) {
        clearTimeout(id);

        id = setTimeout( ()=> {
            id = null;   
            fn(...args); }
        ,t);
        
    }
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */



//  debounce
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

// part of memization -throttle
function throttle(fn, delay = 500) {
  let timerId = null;
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastCall > delay) {
      lastCall = now;
      fn(...args);
    } else {
      if (timerId) clearTimeout(timerId);

      timerId = setTimeout(() => {
        lastCall = Date.now();
        fn(...args);
      }, delay - (now - lastCall));
    }
  };
}

const debouncedLog = debounce((msg) => console.log("Logged:", msg), 1000);

debouncedLog("Hello");
debouncedLog("World"); // Only this will be logged after 1 second
