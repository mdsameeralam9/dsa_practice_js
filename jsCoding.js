function checkPasswordStrength(password) {
  // Initialize score
  let score = 0;
  
    console.log("1",score);
  // Check length
  if (password.length >= 8) score += 1;
  console.log("2",score);
  if (password.length >= 12) score += 1;
    console.log("3",score);
  
  // Check for different character types
  if (/[A-Z]/.test(password)) score += 1; // Uppercase
    console.log("4",score);
  if (/[a-z]/.test(password)) score += 1; // Lowercase
    console.log("5",score);
  if (/[0-9]/.test(password)) score += 1; // Numbers
    console.log("6",score);
  if (/[^A-Za-z0-9]/.test(password)) score += 1; // Special characters
  
    console.log("7",score);
  // Determine strength based on score
  if (score >= 5) return "Strong";
  if (score >= 3) return "Medium";
  return "Weak";
}

// Example usage:
//console.log(checkPasswordStrength("password"))
//console.log(checkPasswordStrength("Password123"))
console.log(checkPasswordStrength("P@ssw0rd123!"))
// checkPasswordStrength("password") // "Weak"
// checkPasswordStrength("Password123") // "Medium"
// checkPasswordStrength("P@ssw0rd123!") // "Strong"































// pass-wzE{60f0MK17
// id- 





// // Map, set diff from Object and array
// // weakMap and weakSet diff from map and set


// if (!String.prototype.mySplit) {
//   String.prototype.mySplit = function (separator) {
//     const result = [];
//     let current = '';
//     const str = this;

//     for (let i = 0; i < str.length; i++) {
//       if (str[i] === separator) {
//         result.push(current);
//         current = '';
//       } else {
//         current += str[i];
//       }
//     }

//     result.push(current); // push the last part
//     return result;
//   };
// }


// console.log("hello world".mySplit(" ")); 
// // Output: ["hello", "world"]
// console.log("hello world".mySplit(""));
// console.log("a,b,c".mySplit(",")); 
// // Output: ["a", "b", "c"]

// console.log('----------------------------------------'); 

// console.log("hello world".split(" ")); 
// console.log("hello world sx".split("-"));
// console.log("a,b,c".split(",")); 

// if (!String.prototype.splitt) {
//   String.prototype.splitt = function(separator, limit) {
//     var result = [];
//     var str = this;
//     var currentIndex = 0;
//     var matchIndex;

//     if (separator === undefined) {
//       return [str];
//     }

//     if (typeof separator !== 'string') {
//       throw new TypeError('Only string separators are supported in this polyfill.');
//     }

//     while ((matchIndex = str.indexOf(separator, currentIndex)) !== -1) {
//       result.push(str.slice(currentIndex, matchIndex));
//       currentIndex = matchIndex + separator.length;

//       if (limit !== undefined && result.length >= limit) {
//         return result;
//       }
//     }

//     result.push(str.slice(currentIndex));

//     return limit !== undefined ? result.slice(0, limit) : result;
//   };
// }
// //console.log("hello world".splitt(""));