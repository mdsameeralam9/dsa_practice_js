// pop
if (!Array.prototype.pop) {
  Array.prototype.pop = function () {
    if (this.length === 0) return undefined;

    const lastIndex = this.length - 1;
    const lastElement = this[lastIndex];
    this.length = lastIndex; // Remove the last element
    return lastElement;
  };
}

// push
Array.prototype.myPush = function(...value){
   for(const elem of value){
    this[this.length] = elem
   }
   return this.length
}

// shift
if (!Array.prototype.shift) {
  Array.prototype.shift = function () {
    if (this.length === 0) return undefined;

    const firstElement = this[0];
    for (let i = 1; i < this.length; i++) {
      this[i - 1] = this[i];
    }
    this.length--;
    return firstElement;
  };
}

// unshift
if (!Array.prototype.unshift) {
  Array.prototype.unshift = function(...items) {
    // Shift existing elements to the right
    for (let i = this.length - 1; i >= 0; i--) {
      this[i + items.length] = this[i];
    }

    // Insert new items at the beginning
    for (let j = 0; j < items.length; j++) {
      this[j] = items[j];
    }

    // Return the new length of the array
    return this.length;
  };
}


// sort 
if (!Array.prototype.mySort) {
  Array.prototype.mySort = function(compareFn) {
    const arr = this;

    // Default comparison function (lexicographic order)
    const defaultCompare = (a, b) => {
      const A = String(a);
      const B = String(b);
      if (A < B) return -1;
      if (A > B) return 1;
      return 0;
    };

    const cmp = compareFn || defaultCompare;

    // Bubble sort implementation
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (cmp(arr[j], arr[j + 1]) > 0) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }

    return arr;
  };
}


//5.  Array entries
if (!Array.prototype.entries) {
  Array.prototype.entries = function () {
    let index = 0;
    const arr = this;

    return {
      next: function () {
        if (index < arr.length) {
          return { value: [index, arr[index++]], done: false };
        } else {
          return { value: undefined, done: true };
        }
      },
      [Symbol.iterator]: function () {
        return this;
      }
    };
  };
}

const colors = ["red", "green", "blue"];
const iterator = colors.entries();
for (const [index, color] of iterator) {
  console.log(index, color);
}
