{/**
1. Flat array
2. delete, add elemeent and merge3 arr
3. sum zero or equal to target
4. Anagram
5. maxSumSubArray or largestSumOfDigit
6. check square 
7. reverse array 
8. rotate array 
9. firstNonRepeatingItem
10. find missing Number 
11. removeDublicate 
12.intersectionOfArray
13. groupAnagrams

*/}

// 1. flat array
function flatArray(arr, deep = 1) {
    let result = [], arrLength = arr.length;

    for (let i = 0; i < arrLength; i++) {
        if (Array.isArray(arr[i]) && deep > 0) {
            result = result.concat(flatArray(arr[i], deep - 1))
        } else {
            result.push(arr[i])
        }
    }
    return result
}

// 1.1 second approach
function flatArray(arr, deep = 1) {
    if (deep > 0) {
        return arr.reduce(
            (acc, currentElem) =>
                acc.concat(
                    Array.isArray(currentElem)
                        ? flatArray(currentElem, deep - 1)
                        : currentElem
                ),
            []
        );
    } else {
        return arr;
    }
}

// 1.2 third approach
function flatArray(arr) {
    const stack = [...arr];
    const result = [];

    while (stack.length) {
        const lastElem = stack.pop();

        if (Array.isArray(lastElem)) {
            stack.push(...lastElem)
        } else {
            result.push(lastElem)
        }
    }
    return result.reverse()
}

const ar = [2, 12, [34, [5, 400, [908, [9]]]], [100, [-9]]]
console.log(flatArray(ar, Infinity))
//-------------------------------------------------------------------------------

// 2. array - delete item, add item, merge 
function deleteElement(data, index) {
    for (let i = index; i < data.length - 1; i++) {
        data[i] = data[i + 1];
    }
    data.length = data.length - 1;
    return data
}

function addElement(data, index, value) {
    for (let i = data.length - 1; i >= 0; i--) {
        if (i >= position) {
            data[i + 1] = data[i];
            if (i == index) {
                data[i] = value;
            }
        }
    }
    return data
}

function mergeArr(data, data2) {
    const data3 = []
    for (i = 0; i < data.length; i++) {
        data3[i] = data[i];
    }
    for (i = 0; i < data2.length; i++) {
        data3[data.length + i] = data2[i];
    }
    return data3
}

//------------------------------------------------------------------------------------------

// 3. sum zero or equal to target
function findPairsWithSum(arr, target) {
    const seen = {};
    const pairs = []; // for multiple pair value

    for (let num of arr) {
        const remainValue = target - num

        // for target
        if (seen[remainValue]) {
            return [num, remainValue] // for firts pair only
            pairs.push([num, remainValue]); // Pair that sums to 0
        }

        seen[num] = true;
    }

    return pairs;
}


// 4. Anagram
function anagram(str, str1) {
    if (str.length !== str1.length) return false;

    let strObj = {};
    for (let letter of str) {
        strObj[letter] = (strObj[letter] || 0) + 1;
    }

    for (let letter of str1) {
        if (!strObj[letter]) {
            return false
        }
        strObj[letter]--;
    }

    return true
}

// 4.1 second approahc
function isAnagram(str1, str2) {
    const format = str => str.toLowerCase().replace(/[^a-z0-9]/g, '');
    // format and remove white spave
    {/**
    function removeSpaces(str) {
      return str.toLowerCase().split(' ').join('');
    }

    // for loop to remove space
    function removeSpacesManually(str) {
        let result = '';
        for (let i = 0; i < str.length; i++) {
            let char = str[i];
            if (char !== ' ') {
            // Convert uppercase to lowercase manually
            char = char.toLowerCase()
            result += char;
            }
        }
        return result;
    }


    
  */}
    const buildCharMap = str => {
        const map = {};
        for (let char of format(str)) {
            map[char] = (map[char] || 0) + 1;
        }
        return map;
    };

    const map1 = buildCharMap(str1);
    const map2 = buildCharMap(str2);

    if (Object.keys(map1).length !== Object.keys(map2).length) return false;

    for (let char in map1) {
        if (map1[char] !== map2[char]) return false;
    }

    return true;
}

// 4.2 third approach
function removeSpaces(str) {
    return str.toLowerCase().split(' ').join('');
}

console.log(anagram('hello', 'llhoe'))
//------------------------------------------------------------

// 5. largestSumOfDigit
function largestSumOfDigit(arr, ofDigit) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        let tempMax = 0;
        for (let k = i; k < ofDigit + i; k++) {
            tempMax += arr[k]
        }

        if (tempMax > max) {
            max = tempMax
        }
    }
    return max
}

console.log(largestSumOfDigit([2, 3, 1, 4, 8, 3, 9, 10], 3))

// 5.2 largest sum of array element
function largestSumOfDigit(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        let tempMax = 0;
        for (let k = i; k < arr.length; k++) {
            tempMax += arr[k]
        }

        if (tempMax > max) {
            max = tempMax
        }
    }
    return max
}

console.log(largestSumOfDigit([2, 3, 1, 4, 8, 3, 9, 10]))

// 5.3 maxSubSubArray
function maxSubSubArray(arr) {
    let maxSum = 0;
    let startIndex = 0;
    let endIndex = 0

    for (let i = 0; i < arr.length; i++) {
        let currentTotal = 0;
        for (let k = i; k < arr.length; k++) {
            currentTotal = currentTotal + arr[k];
            if (maxSum < currentTotal) {
                maxSum = currentTotal;
                startIndex = i;
                endIndex = k
            }
        }
    }

    return { maxSum, ar: arr.slice(startIndex, endIndex + 1) }
}
console.log(maxSubSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])) // 6


// 6 checkSquare from two array
function checkSqure(arry1, arry2) {
    if (arry1.length !== arry2.length) return false;

    let arr2Obj = {};
    for (let item of arry2) {
        arr2Obj[item] = (arr2Obj[item] || 0) + 1
    }


    let arr1Obj = {};
    for (let item of arry1) {
        arr1Obj[item] = (arr1Obj[item] || 0) + 1
    }

    for (let key in arr1Obj) {
        if (!arr2Obj[key * key]) {
            return false;
        }

        if (arr1Obj[key] !== arr2Obj[key * key]) {
            return false;
        }
    }

    return true;
}
console.log(checkSqure([2, 3, 1, 4, 5], [4, 9, 1, 16, 25]))

// using for loop
function checkSqure(arry1, arry2) {
    if (arry1.length !== arry2.length) return false;
    let isSqure = false
    for (let i = 0; i < arry1.length; i++) {

        for (let k = 0; k < arry2.length; k++) {
            if (arry1[i] * arry1[i] === arry2[k]) {
                isSqure = true;
            }

            if (k === arry2.length) {
                if (!isSqure) {
                    isSqure = false;
                }

            }
        }

    }

    return isSqure;
}

console.log(checkSqure([2, 3, 1, 4, 5], [4, 9, 1, 16, 25]))
// ----------------------------------------------------------------

// 7. reverseArray
function reverseArray(arr){
  let loopLength = Math.floor(arr.length/2);
  let start = 0
  for(let i=arr.length-1; i>loopLength; i--){
    [arr[i], arr[start]] = [arr[start], arr[i]]
    start++
  }
  return arr
}

function reverseArr(ary){
   let count=0;
   let end = ary.length-1
   while( count < end){
   [ary[end], ary[count]] = [ary[count], ary[end]]
   count++;
   end--;
  }
  return ary
}
//-------------------------------------------------------------------

// 8. rotate array
function rotateArray(arr, k) {
  k = k % arr.length;
  return [...arr.slice(-k), ...arr.slice(0, -k)]
}

function rotateArray(arr, k) {
 k = k % arr.length; //
  let i =0
  while(i<k){
    console.log(i)
    arr.unshift(arr.pop())
    i++;
  }

  return arr
}

//-----------------------------------------------------------
// 9. firstNonRepeatingItem
function firstNonRepeatingItem(arr) {
  let obj = {};
  for(const item of arr){
    obj[item] = (obj[item]||0)+1
  }

  for(const item of arr){
    if(obj[item] === 1) return item
  }

  return null
}

//-----------------------------------------------------

// 10. find missing number
function findMissingNumber(till, arr) {
  const arrSum = arr.reduce((total, cuurent) => total + cuurent, 0)
  let sum = 0;
  for (let i = 1; i <= till; i++) {
    sum += i
  }
  return sum - arrSum
}
console.log(findMissingNumber(6, [1, 2, 3, 5, 6])) //4

// 11. removeDublicate 
function removeDublicate(arr) {
  // return [...new Set(arr)]
  return arr.filter((value, index, arr) => arr.indexOf(value) === index)
}

// 12.intersectionOfArray
function intersectionOfArray(arr, arr2) {
 let result = [];
 for(const num of arr){
  if(arr2.includes(num)){
    result.push(num)
  }
 }

 return result;
}

function intersectionOfArray(arr, arr2) {
  const countMap = {};
  const result = [];

  // Count occurrences of each element in arr2
  for (const val of arr2) {
      countMap[val] = (countMap[val] || 0) + 1;
  }

  // Check for intersection
  for (const val of arr) {
      if (countMap[val]) {
          result.push(val);
          // Optionally, you can remove the element from the map to avoid duplicates
          delete countMap[val];
      }
  }

  return result;
}
console.log(intersectionOfArray([4, -1, 2, 1, -5, 4], [-1, 1]))

// groupAnagrams
function groupAnagrams(arr){
  let obj = {};
  for(const item of arr){
    const splitedAndSortItem = item.split('').sort().join('')
    if(!obj[splitedAndSortItem]){
      obj[splitedAndSortItem] = []
    }
    obj[splitedAndSortItem].push(item)
  }
  return Object.values(obj)
}
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// Output: [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]


// finde dublicate from 1 to n range - means value from 1 to 10

function findDuplicate(nums) {
  let left = 1;
  let right = nums.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2); // 2 =>  1
    let count = 0;

    // Count how many numbers are <= mid
    for (const num of nums) {
      if (num <= mid) count++; // 3 => 1
    }

    if (count > mid) { // 3 > 2   => false
      // Duplicate is in the left half
      right = mid; // 2
    } else {
      // Duplicate is in the right half
      left = mid + 1; // => 1+1 => 2(true)
    }
  }

  return left;
}
const nums = [1, 3, 4, 2, 2];
console.log(findDuplicate(nums)); // Output: 2

// mid elem of array - mid value of sorted array return
function findMedianSortedArrays(nums1, nums2) {
    const merged = [...nums1, ...nums2].sort((a, b) => a - b);
    const len = merged.length;

    if (len % 2 === 0) {
        // Even number of elements
        return (merged[len / 2 - 1] + merged[len / 2]) / 2;

        // const mid1 = merged[Math.floor(len / 2) - 1];
        // const mid2 = merged[Math.floor(len / 2)];
        // const median = (mid1 + mid2) / 2;
        
    } else {
        // Odd number of elements
        return merged[Math.floor(len / 2)];
    }
}

//--------------------------------------------

function sort012(arr) {
  let low = 0, mid = 0, high = arr.length - 1;

  while (mid <= high) {
    if (arr[mid] === 0) {
      [arr[low], arr[mid]] = [arr[mid], arr[low]];
      low++;
      mid++;
    } else if (arr[mid] === 1) {
      mid++;
    } else { // arr[mid] === 2
      [arr[mid], arr[high]] = [arr[high], arr[mid]];
      high--;
    }
  }

  return arr;
}

// Example:
console.log(sort012([2, 0, 2, 1, 1, 0])); // Output: [0, 0, 1, 1, 2, 2]

// findSwapPair
function findSwapPair(arr1, arr2) {
  const sum1 = arr1.reduce((a, b) => a + b, 0);
  const sum2 = arr2.reduce((a, b) => a + b, 0);
  const diff = (sum1 - sum2) / 2;

 

  const set2 = new Set(arr2);
  console.log(sum1, sum2, diff,set2)

   
  for (let a of arr1) {
    let b = a - diff;
    if (set2.has(b)) {
      return [a, b];
    }
  }
  return null;
}

// format array to sentence 
function formatList(items) {
  if (items.length === 0) return "";
  // your implementation
  let result = '';
  let count = 0
  for (const item of items) {
    if (items === 1) {
      result = item;
      return result
    } else if (items.length === 2) {
      result = `${items[0]} and ${items[1]}`
      return result
    } else {
      count++;
      if (count + 1 === items.length) {
        result += `${item} and `
      } else if (count === items.length) {
        result += item
      }
      else {
        result += `${item},`
      }
    }
  }

  return result
}
console.log(formatList(["apple", "banana", "apple", "banana", "", "moring"]))
// 'apple, apple and banana'
// ["apple"] => 'apple'
// ["apple", "banana"] => 'apple and banana'
