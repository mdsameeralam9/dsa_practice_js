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


function include(str, val){
    let isIncluded = false;
    for(const char of str){
        if(char === val){
           isIncluded = true;
           return isIncluded;
        }
    }
    return isIncluded
}

function isP_anagram(str){
    // all alphabet must include in this str
    str = str.toLowerCase();
    let uniqStore = new Set();
    let alphabets = 'abcdefghijklmnopqrstuvwxyz';
    for(const char of alphabets){
        if(!str.includes(char)){
            uniqStore.add(char)
        }
    };

    console.log(uniqStore, Array.from(uniqStore))
    return uniqStore.size === 26;
}


console.log(isP_anagram("")) //dog