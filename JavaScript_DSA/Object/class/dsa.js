class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map(); // Maintains insertion order
    }

    get(key) {
        if (!this.cache.has(key)) return -1;

        const value = this.cache.get(key);
        this.cache.delete(key); // Remove and re-insert to update order
        this.cache.set(key, value);
        return value;
    }

    put(key, value) {
        if (this.cache.has(key)) {
            this.cache.delete(key); // Remove to re-insert at end
        }

        this.cache.set(key, value);

        if (this.cache.size > this.capacity) {
            const lruKey = this.cache.keys().next().value; // First inserted = least recently used
            this.cache.delete(lruKey);
        }
    }
}


const lru = new LRUCache(2);
lru.put(1, 1);
lru.put(2, 2);
console.log(lru.get(1)); // returns 1
lru.put(3, 3);           // evicts key 2
console.log(lru.get(2)); // returns -1 (not found)
lru.put(4, 4);           // evicts key 1
console.log(lru.get(1)); // returns -1 (not found)
console.log(lru.get(3)); // returns 3
console.log(lru.get(4)); // returns 4

// 2 chain calculator
class Calculator {
    constructor() {
        this.result = 0;
    }

    add(value) {
        this.result += value;
        return this;
    }

    subtract(value) {
        this.result -= value;
        return this;
    }

    multiply(value) {
        this.result *= value;
        return this;
    }

    divide(value) {
        if (value === 0) {
            throw new Error("Cannot divide by zero");
        }
        this.result /= value;
        return this;
    }

    clear() {
        this.result = 0;
        return this;
    }

    getResult() {
        return this.result;
    }
}

const calc = new Calculator();

const result = calc.add(10).subtract(2).multiply(3).divide(4).getResult();
console.log(result); // Output: 6

// 3. cache 