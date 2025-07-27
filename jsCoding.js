// Object
// map ,weakMap
// class
// promise
// methods

// Before all DSA 

{/**
    
1.Given an array, arr[]. Sort the array using bubble sort algorithm
 
 
2.Check the given String is Panagram or Not.
A. Check the string is Panagram or not
B. If not panagram , then print the missing letters 
ex: The quick brown fox jumps over the lazy dog.
Write a program for Panagram Detector.
* The sentence "The quick brown fox jumps over the lazy dog" contains every single letter in the alphabet. Such sentences are called pangrams.
* Write a function called "findMissingLetters"  which takes a String `sentence`,  and returns all the letters it is missing. Which prevent it from being a pangram.
* You should ignore the case of the letters in sentence, and your return should be all lower case letters, in alphabetical order.
* You should also ignore all non US-ASCII characters.
 
 
Remove the duplicate words from the given Sentence.
Ex:
a) Input: Good day day bye bye
output: Good day bye
 
 
Question: For the given string such as "aabbbbbcc" print the longest occurring character,index and number of times it occurs.
Ex: longest occurring character is b and length is 5 at index 2.
 
 
Sort an array of 0s, 1s, and 2s in a single pass using two pointers.
 
Given a sorted array arr and an integer k, find the position at which k is present in the array using binary search. Input = [1,2,3,4,5,6],  k = 4
 
1.Given two arrays. Arr1 = {1,2,3,8}, arr2 = {5,6,4,7}. Find a number from each array to be interchanged to reach     a common sum of all elements for both arrays. , Output: {1,5} or {3,7} or {2,6}
2. find the median of 2 sorted arrays
3.Reverse String without changing the special character. input : ab#cd%ef@ ,   output : fe#dc%ba@
4. Given an array of n+1 integers, where each integer is between 1 and n (inclusive), find the duplicate number using binary search
 
 
Topics for theory - data structure, which to use when, how actually insertion and deletion works in the data structures, core java concepts, oops concepts and what all technologies you have worked on
     


https://www.npmjs.com/package/otp-input-react
*/}


function finDublicate(strng){
  
}

console.log(finDublicate('ab#cd%ef@'))

























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