{/**
 1. p_anagram
 2. longestSubStringWithoutRepeatingCharacter
 3. getCharDistance
 4. frequencyCount or compressString
 5. countLetterRepeats
 6. Rotate string
 7. validParenthesis
 8. removeRepeat word from sentence
 9. longestRepeatCharacterFromString
 10. longestPalindromeBrute
 11. find all anagrams of a pattern in a given string
 12. splitPath split string and seprate char
*/}

// 1 p_anagram
function isP_anagram(str) {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  str = str.toLowerCase();
  for (const char of alphabets) {
    if (!str.includes(char)) {
      return false
    }
  }
  return true
}
console.log(isP_anagram("The quick brown fox jumps over the lazy dog"))
// 1.1 if not p_anagram the  return alphabets
function isP_anagram(str) {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  str = str.toLowerCase();
  const result = []
  for (const char of alphabets) {
    if (!str.includes(char)) {
     result.push(char)
    }
  }
  return result
}

// 1.2 another approach
function findMissingLetters(str) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let lowerStr = str.toLowerCase();
  let missing = [];

  for (let i = 0; i < alphabet.length; i++) {
    let found = false;

    // Check manually if the letter exists in the string
    for (let j = 0; j < lowerStr.length; j++) {
      if (lowerStr[j] === alphabet[i]) {
        found = true;
        break;
      }
    }

    if (!found) {
      missing.push(alphabet[i]);
    }
  }

  return missing.length === 0 ? true : missing;
}

console.log(findMissingLetters("The quick brown fox jumps over the lazy dog"));
// Output: true (it's a pangram)
console.log(findMissingLetters("Hello world"));
// Output: [ 'a', 'b', 'c', 'f', 'g', 'i', 'j', 'k', 'm', 'n', 'p', 'q', 's', 't', 'u', 'v', 'x', 'y', 'z' ]

function isIncludes(arr, value){
  let isFound = false;
  for(let i=0; i<arr.length; i++){
    if(arr[i] === value){
      isFound = true;
      break;
    }
  }
  return isFound
}

function findMissingLetters(str) {
  str = str.toLowerCase();
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  const result = []

  for(const char of alphabet){
    if(!isIncludes(str, char)){
      result.push(char)
    }
  }
  return result
}

function findMissingLetters(str){
  str = str.toLowerCase();
  const uniqArr = new Set();
  for(const char of str){
    if(char >= 'a' && char <= 'z'){
      uniqArr.add(char)
    }
  }
  return uniqArr.size === 26;
}
//----------------------------------------------------

// 2. longestSubStringWithoutRepeatingCharacter
function longestSubStringWithoutRepeatingCharacter(str){
  const uniqArr = new Set();
  let strUniq = '';
  let max = 0

  let startIndex = 0, endIndex =0;
  while(startIndex < str.length){
    if(!uniqArr.has(str[startIndex])){
      uniqArr.add(str[startIndex])
      startIndex++;
      if(uniqArr.size > max){
        max = uniqArr.size;
        strUniq = str.slice(endIndex, startIndex)
      }
    } else{
      uniqArr.delete(str[endIndex])
     endIndex++;
    }
  }
  
  return {max, strUniq}
}

console.log(longestSubStringWithoutRepeatingCharacter("abcabcbb")) // 3
console.log(longestSubStringWithoutRepeatingCharacter("geeksforgeeks")) //7
console.log(longestSubStringWithoutRepeatingCharacter("aaa")) //1
console.log(longestSubStringWithoutRepeatingCharacter("abcdefabcbb")) //6
console.log(longestSubStringWithoutRepeatingCharacter("abcdef")) //6

//--------------------------------------------------------

//3. getCharDistance
function getCharDistance(str, val){
  const result = []
  for(let i=0; i<str.length; i++){
    if(str[i] === val){
      result.push(i)
    }
  }
  return result[1]-result[0]
}
console.log(getCharDistance("myx name is md xsameer", "e")); // Output: 5

//----------------------------------------------------------------

// 4. frequencyCount
function frequencyCount(str){
  let obj = {}, result="";
  for(const char of str){
    obj[char] = (obj[char] || 0)+1
  }

  for(const key in obj){
    result += key+obj[key]
  }

  return result;
}

console.log(frequencyCount("aaaaabbbccccccdd"));

//-------------------------------------------------------

// countLetterRepeats
function countLetterRepeats(str){
 str = str.toLowerCase();
 const obj = {}
 for(const char of str){
  if(char !== " "){
obj[char] = (obj[char]||0)+1
  }
 }

 return obj
}
console.log(countLetterRepeats('This form allows you to generate random text strings'))

// 6. Rotate string
function rotateString(str, rotateFrom){
  return str.slice(-rotateFrom)+str.slice(0,-rotateFrom)
}
function rotateString(str, len){
  str = str.split("")
  let i = 0;
  while(i < len){
    str.unshift(str.pop())
    i++
  }
  return str.join("")
}

function rotateString(str, rotateFrom){
  let result = ''
  for(let i=rotateFrom; i<str.length; i++){
    result += str[i]
  }

  for(let i=0; i<rotateFrom; i++){
    result += str[i]
  }

  return result
}
console.log("===>", rotateString("abcdef", 3)); // 'defabc'

// validParenthesis
function validParenthesis(str) {
  const obj = {
    '}': '{',
    ')': '(',
    ']': '['
  };

  const stack = [];

  for (const char of str) {
    if (obj[char]) {
      // If it's a closing bracket, check for a matching opening bracket
      if (stack.pop() !== obj[char]) {
        return false;
      }
    } else {
      // It's an opening bracket, push to stack
      stack.push(char);
    }
  }

  // If stack is empty, all brackets matched
  return stack.length === 0;
}
console.log(validParenthesis("()[]{}"));


// removeRepeat word from sentence
function include(arr,val){
  if(arr.length === 0) return false;
  let isFound = false;
  for(const item of arr){
   if(item === val){
    isFound = true;
   }
  }

  return isFound
}

function removeRepeat(str){
 const splitedArr = str.split(" ")
 let arr = [];
 for(const item of splitedArr){
  if(!include(arr, item)){
    arr.push(item)
  }
 }

 return arr.join(' ')
}

console.log(removeRepeat("Good day Good day bye bye"))

function removeDuplicatesWithoutBuiltIn(sentence) {
  let words = [];
  let word = "";
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " ") {
      if (word !== "") {
        words.push(word);
        word = "";
      }
    } else {
      word += sentence[i];
    }
  }
  if (word !== "") words.push(word); // Add last word

  let result = [];
  for (let i = 0; i < words.length; i++) {
    let found = false;
    for (let j = 0; j < result.length; j++) {
      if (words[i] === result[j]) {
        found = true;
        break;
      }
    }
    if (!found) {
      result.push(words[i]);
    }
  }

  // Join manually
  let finalSentence = "";
  for (let i = 0; i < result.length; i++) {
    finalSentence += result[i];
    if (i !== result.length - 1) finalSentence += " ";
  }

  return finalSentence;
}
// Example:
console.log(removeDuplicatesWithoutBuiltIn("Good day day bye bye")); // Output: "Good day bye"


// longestRepeatCharacterFromString
function longestRepeatCharacterFromString(str){
  let len = 0;
  let word = '';
  let index = 0;

  let obj = {};
  for(const char of str){
    obj[char] = (obj[char]||0)+1
  }

  for(const key in obj){
    if(obj[key] > len){
      len = obj[key];
      word = key
    }
  }

  for(let i=0; i<str.length; i++){
     if(str[i] === word){
      index = i;
      break;
     }
  }

  return { len, word, index }

}

console.log(longestRepeatCharacterFromString("aabbbbbcc"))

function longestRepeatCharacterFromString(str) {
  let maxChar = '';
  let maxCount = 0;
  let maxIndex = 0;

  let currentChar = str[0];
  let currentCount = 1;
  let currentIndex = 0;

  for (let i = 1; i < str.length; i++) {
    if (str[i] === currentChar) {
      currentCount++;
    } else {
      if (currentCount > maxCount) {
        maxChar = currentChar;
        maxCount = currentCount;
        maxIndex = currentIndex;
      }
      currentChar = str[i];
      currentCount = 1;
      currentIndex = i;
    }
  }

  // Final check for the last sequence
  if (currentCount > maxCount) {
    maxChar = currentChar;
    maxCount = currentCount;
    maxIndex = currentIndex;
  }

  console.log(`Longest occurring character is '${maxChar}' and length is ${maxCount} at index ${maxIndex}.`);
}
// Example:
//longest occurring character is b and length is 5 at index 2.
console.log(longestRepeatCharacterFromString("aabbbbbcc"))

// swap alphabets without special char
//2. find the median of 2 sorted arrays
function reverseStringPreserveSpecial(str) {
    const arr = str.split('');
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        if (!/[a-zA-Z]/.test(arr[left])) { // if we donot have alphabets then move towards right
            left++;
        } else if (!/[a-zA-Z]/.test(arr[right])) { // if we donot have alphabets then move towards left
            right--;
        } else {
            // Swap letters
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }

    return arr.join('');
}

const input = "ab#cd%ef@";
const output = reverseStringPreserveSpecial(input);
console.log(output); // Output: "fe#dc%ba@"


// 3.Reverse String without changing the special character. input : ab#cd%ef@ ,   output : fe#dc%ba@

//!(/[a-z,A-Z]/.test())
function isAlphabet(char) {
    // Check if char is a letter using simple comparison
    return (
        (char >= 'A' && char <= 'Z') ||
        (char >= 'a' && char <= 'z')
    );
}

function reverseStringPreserveSpecial(str) {
    const letters = [];

    // Step 1: Collect all letters
    for (let i = 0; i < str.length; i++) {
        if (isAlphabet(str[i])) {
            letters.push(str[i]);
        }
    }
    // [a,b,c,d,e,f]
    //input : ab#cd%ef@ ,   output : fe#dc%ba@

    // Step 2: Rebuild the string
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (isAlphabet(str[i])) {
            result += letters.pop(); // Take from end (reverse)
        } else {
            result += str[i]; // Keep special character
        }
    }

    return result;
}


// ---------------------------------------------------------

// getSubstrings
function getSubstrings(input, length) {
  const result = [];
  for (let i = 0; i <= input.length - length; i++) {
    result.push(input.substring(i, i + length));
  }
  return result;
}

// Example usage:
console.log(getSubstrings("aab", 2));   // Output: ["aa", "ab"]
console.log(getSubstrings("aabc", 2));  // Output: ["aa", "ab", "bc"]
console.log(getSubstrings("abc", 1));   // Output: ["a", "b", "c"]

// third approach
function findSubString(str, n){
  let result = new Set();
  for(let i=0; i<=str.length-n; i++){
    let subStr = str.slice(i, n+i);
    result.add(subStr);
  }
  return Array.from(result);
}

console.log(findSubString("abc", 1))

// second approach
function getSubstrings(input, length) {
  const result = [];
  for (let i = 0; i <= input.length - length; i++) {
    let temp = "";
    for (let j = 0; j < length; j++) {
      temp += input[i + j];
    }
    result.push(temp);
  }
  return result;
}

// Example usage:
console.log(getSubstrings("aab", 2));   // Output: ["aa", "ab"]
console.log(getSubstrings("aabc", 2));  // Output: ["aa", "ab", "bc"]
console.log(getSubstrings("abc", 1));   // Output: ["a", "b", "c"]

// longestPalindromeBrute
function longestPalindromeBrute(s) {
    let max = "";
    function isPalindrome(str) {
        return str === str.split('').reverse().join('');
    }

    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j <=s.length; j++) {
            let substr = s.slice(i, j);
            if (isPalindrome(substr) && substr.length > max.length) {
                max = substr;
            }
        }
    }
    return max;
}

// Example usage:
console.log(longestPalindromeBrute("forgeeksskeegfor")); // Output: "geeksskeeg"

//find all anagrams of a pattern in a given string
//  FIND ALL ANAGRAMS IN A STRING
function findAnagramsSimple(s, p) {
    const result = [];
    const sortedP = p.split('').sort().join('');
    const pLength = p.length;

    for (let i = 0; i <= s.length - pLength; i++) {
        const substring = s.substr(i, pLength);
        //const substring = s.slice(i, i + pLength); // using slice instead of substr
        if (substring.split('').sort().join('') === sortedP) {
            result.push(i);
        }
    }

    return result;
}

// Example usage:
console.log(findAnagramsSimple("cbaebabacd", "abc")); // Output: [0, 6]

// 12. splitPath
function splitPath(path) {
  const parts = [];
  let buffer = '';

  for (let i = 0; i < path.length; i++) {
    const char = path[i];

    if (char === '.' || char === '[') {
      if (buffer) {
        parts.push(buffer);
        buffer = '';
      }
    } else if (char === ']') {
      if (buffer) {
        parts.push(buffer);
        buffer = '';
      }
    } else {
      buffer += char;
    }
  }

  if (buffer) parts.push(buffer);

  return parts;
}
console.log(splitPath("data.results[1].status[0].type"))
// [ "data", "results", "1", "status","0", "type"]