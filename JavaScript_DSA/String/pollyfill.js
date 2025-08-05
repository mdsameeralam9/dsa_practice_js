// pollyfill
// includes
// split 
// slice
// join


// includes
if (!String.prototype.includes) {
  String.prototype.includes = function (search, start) {
    if (typeof start !== 'number') {
      start = 0;
    }

    if (start + search.length > this.length) {
      return false;
    } else {
      return this.indexOf(search, start) !== -1;
    }
  };
}

// split
{/**
 str.split(separator, limit);
  1. separator: Specifies the character, string, or regular expression to use for splitting.
  2. limit (optional): Limits the number of splits. 
*/}


if (!String.prototype.splitPolyfill) {
  String.prototype.splitPolyfill = function (separator, limit) {
    const result = [];

    // If separator is undefined, return the whole string in an array
    if (separator === undefined) {
      return [this.toString()];
    }

    // If separator is an empty string, split every character
    if (separator === '') {
      for (let i = 0; i < this.length; i++) {
        if (limit !== undefined && result.length >= limit) break;
        result.push(this[i]);
      }
      return result;
    }

    let str = this.toString();
    let start = 0;
    let index;

    while ((index = str.indexOf(separator, start)) !== -1) {
      if (limit !== undefined && result.length >= limit) break;
      result.push(str.slice(start, index));
      start = index + separator.length;
    }

    if (limit === undefined || result.length < limit) {
      result.push(str.slice(start));
    }

    return result;
  };
}
console.log("a,b,c".splitPolyfill(","));        // ["a", "b", "c"]
console.log("hello".splitPolyfill(""));         // ["h", "e", "l", "l", "o"]
console.log("hello".splitPolyfill());           // ["hello"]
console.log("a,b,c,d".splitPolyfill(",", 2));   // ["a", "b"]

