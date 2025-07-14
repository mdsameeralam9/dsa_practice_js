// Map, set diff from Object and array
// weakMap and weakSet diff from map and set


if (!String.prototype.mySplit) {
  String.prototype.mySplit = function (separator) {
    const result = [];
    let current = '';
    const str = this;

    for (let i = 0; i < str.length; i++) {
      if (str[i] === separator) {
        result.push(current);
        current = '';
      } else {
        current += str[i];
      }
    }

    result.push(current); // push the last part
    return result;
  };
}


console.log("hello world".mySplit(" ")); 
// Output: ["hello", "world"]
console.log("hello world".mySplit(""));
console.log("a,b,c".mySplit(",")); 
// Output: ["a", "b", "c"]

console.log('----------------------------------------'); 

console.log("hello world".split(" ")); 
console.log("hello world sx".split("-"));
console.log("a,b,c".split(",")); 

if (!String.prototype.splitt) {
  String.prototype.splitt = function(separator, limit) {
    var result = [];
    var str = this;
    var currentIndex = 0;
    var matchIndex;

    if (separator === undefined) {
      return [str];
    }

    if (typeof separator !== 'string') {
      throw new TypeError('Only string separators are supported in this polyfill.');
    }

    while ((matchIndex = str.indexOf(separator, currentIndex)) !== -1) {
      result.push(str.slice(currentIndex, matchIndex));
      currentIndex = matchIndex + separator.length;

      if (limit !== undefined && result.length >= limit) {
        return result;
      }
    }

    result.push(str.slice(currentIndex));

    return limit !== undefined ? result.slice(0, limit) : result;
  };
}
//console.log("hello world".splitt(""));