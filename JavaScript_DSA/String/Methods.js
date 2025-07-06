//1. slice(0, 10) - take a part of array, accept 2 parametes -> start and end(exluding last)
// also accept negative

//2. substring(0, 10) - take a part of array, accept 2 parametes -> start and end(exluding last)
// donot accept negative - only works with positive value
// if start value is invalid value then it considered as 0


// 3. reverse() - reverse string

// 4. charAT()- take index and give value:returns the character at a given position in a string
// only allowed positive value
// 5. at() - returns the character at a given position in a string
// only allowed positive value and negative both

// 6. toUpperCase()-A string is converted to upper case with toUpperCase():
// 7. toLowerCase()-A string is converted to lower case with toLowerCase():
// 8. length - return length of string

// 9. split(",") | split("|") | split(" ") - A string can be converted to an array with the split() method:
// => If the separator is omitted, the returned array will contain the whole string in index [0].

// 10. concat()- joins two or more strings:
let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2);

// 11. trim(): The trim() method removes whitespace from both sides of a string:
let text = "      Hello World!      ";
text = text1.trim();
// trimStart()- removes whitespace only from the start of a string;
//trimEnd()- removes whitespace only from the end of a string


//11. repeat() -`string.repeat(count)`: The repeat() method returns a string with a number of copies of a string.
//The repeat() method returns a new string and does not change the original string..
let texte = "Hello world!";
let result = texte.repeat(2); // Hello world!Hello world!

// 12. replace():  The replace() method replaces a specified value with another value in a string:
let textr = "Please visit Microsoft!";
let newText = textr.replace("Microsoft", "W3Schools"); // Please visit W3Schools!

// 13. includes(): - The includes() method returns true if a string contains a specified value.


// 14. indexOf(): - The indexOf() method returns the index (position) of the first occurrence of a string in a string, or it returns -1 if the string is not found:
let textrrr = "Please locate where 'locate' occurs!";
let index = textrrr.indexOf("locate");

// 15. search(): - The search() method searches a string for a string (or a regular expression) and returns the position of the match: