const TimeLimitedCache = function() {
    this.cache = new Map();  // Using Map so we don't need a size variable
};

TimeLimitedCache.prototype.set = function(key, value, duration) {
    let found = this.cache.has(key);
    if (found) clearTimeout(this.cache.get(key).ref);  // Cancel previous timeout
    this.cache.set(key, {
        value,  // Equivalent to `value: value`
        ref: setTimeout(() => this.cache.delete(key), duration)
    });
    return found;
};

TimeLimitedCache.prototype.get = function(key) {
    return this.cache.has(key) ? this.cache.get(key).value : -1;
};

TimeLimitedCache.prototype.count = function() {
    return this.cache.size;
};

// 2
var TimeLimitedCache = function() {

    this.cache = new Map();
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {

    const existing = this.cache.get(key);
    const isActive = existing !== undefined;

    // If key exists, clear the existing timeout
    if (isActive) clearTimeout(existing.timeout);

    // Schedule a new timeout to delete the key when duration elapses
    const timeout = setTimeout(() => {
        this.cache.delete(key);
    }, duration);

    // Store value and the associated timeout reference
    this.cache.set(key, { value, timeout });

    return isActive;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {

    const entry = this.cache.get(key);
    return entry ? entry.value : -1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {

        return this.cache.size;
};
/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */

var TimeLimitedCache = function() {
    this.cache = {};
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
  if (this.cache[key] && this.cache[key].timer) {
    clearTimeout(this.cache[key].timer);
    this.cache[key].value = value;
    this.cache[key].timer = setTimeout(() => {
      this.remove(key);
    }, duration);
    return true;
  } else {
    this.cache[key] = {
      value: value,
      timer: setTimeout(() => {
        this.remove(key);
      }, duration)
    };
    return false;
  }
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
  if (this.cache[key] && this.cache[key].timer) {
    return this.cache[key].value;
  } else {
    return -1;
  }
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
  let count = 0;
  for (const key in this.cache) {
    if (this.cache[key].timer) {
      count++;
    }
  }
  return count;
};

TimeLimitedCache.prototype.remove = function(key) {
  delete this.cache[key];
};

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */