// 1. Bubble sort start 
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let k = i + 1; k < arr.length; k++) {
      if (arr[k] < arr[i]) {
        [arr[i], arr[k]] = [arr[k], arr[i]]
      }
    }
  }
  return arr;
}

function bubbleSort_optimised_1(arr) {
  for (let i = 0; i < arr.length; i++) {
    let isSwap = false
    for (let k = i + 1; k < arr.length; k++) {
      if (arr[k] < arr[i]) {
        [arr[i], arr[k]] = [arr[k], arr[i]];
        isSwap = true
      }
    }
    if (!isSwap) break;
  }
  return arr;
}

function bubbleSort_optimised_2(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    let isSwap = false
    for (let k = 0; k < i; k++) {
      if (arr[k] > arr[k + 1]) {
        [arr[k], arr[k + 1]] = [arr[k + 1], arr[k]];
        isSwap = true
      }
    }
    if (!isSwap) break;
  }
  return arr;
}

function bubbleSort_Recursive(arr, size) {
  if (size === 1) return arr;
  for (let i = 0; i < size; i++) {
    if (arr[i] > arr[i + 1]) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
    }
  }
  return bubbleSort_Recursive(arr, size - 1);
}
const array = [5, 1, -123, 0, 1000, 2, 5, 6, 9];
function bubbleSort(arr, len) {
  if (len <= 1) return arr;

  let isSwap = false;
  for (let i = 0; i < len - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      isSwap = true;
    }
  }

  // If no swaps occurred, the array is already sorted
  if (!isSwap) return arr;

  return bubbleSort(arr, len - 1);
}

const arr = [0, 11, 17, 33, -100, 49948, 458];
console.log(bubbleSort(arr, arr.length));

console.log("Sorted array:", bubbleSort_Recursive(array, array.length));
// 1. Bubble sort END 

// 2. selectionSort
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i
    for (let k = i + 1; k < arr.length; k++) {
      if (arr[k] < arr[min]) {
        min = k
      }
    }

    if (min !== i) {
      [arr[min], arr[i]] = [arr[i], arr[min]]
    }

  }

  return arr;
}

console.log("Sorted array:", selectionSort([5, 2, 9, 1, 5, 6]));

// 3. Insertion sort 
const insertionSort = (arr) => {
  // 1. 1st loop start from 1 index
  // 2. initialize a varible for inner loop with value `i-1` with decrease it till 0 inside loop
  // 3. compare first loop current value with prevoius value in while loop, if value is greated then 
  // 4. move the current index value to next index => [INDEX+1]
  for (let i = 1; i < arr.length; i++) {
    const currentElement = arr[i];
    let startIndex = i - 1;

    while (startIndex >= 0 && arr[startIndex] > currentElement) { // ascending
      //while(startIndex >= 0 && arr[startIndex] < currentElement){ // desending
      arr[startIndex + 1] = arr[startIndex]
      startIndex--;
    }
    arr[startIndex + 1] = currentElement
  }
  return arr
}

// 3.2 Insertion sort: Second Approach
console.log("Sorted array:", insertionSort([5, 2, 9, 1, 5, 6]));


// 4. merge sort
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  // Split the array into halves
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  // Merge the sorted halves
  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  let i = 0, j = 0;

  // Compare elements from both halves and merge them in order
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  // Add remaining elements
  return result.concat(left.slice(i)).concat(right.slice(j));
}
console.log("Sorted array:", mergeSort([38, 27, 43, 3, 9, 82, 10]));


// 5. quick sort
// with last index as pivot elemet
function quickSort(arr) {
  if (arr.length <= 1) return arr;

  // split array till single element
  let pivotELement = arr[arr.length - 1];
  const firstSice = []
  const secondSice = []

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivotELement) {
      firstSice.push(arr[i])
    } else {
      secondSice.push(arr[i])
    }
  }
  return [...quickSort(firstSice), pivotELement, ...quickSort(secondSice)]
}

// with zero index as pivot elemet
function quickSort2(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  // Choose the pivot as the first element
  const pivot = arr[0];
  const left = [];
  const right = [];
  // Partition the array starting from index 1
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  // Recursively sort and combine
  return [...quickSort2(left), pivot, ...quickSort2(right)];
}

// with pivot as dynamic index
function quickSortWithPivot3(arr, pivotIndex) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[pivotIndex];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === pivotIndex) continue;
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSortWithPivot3(left, 0), pivot, ...quickSortWithPivot3(right, 0)];
}

function quickSort4(arr) {
  if (arr.length <= 1) return arr;

  const pivotIndex = Math.floor(arr.length / 2);
  const pivot = arr[pivotIndex];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === pivotIndex) continue;
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example usage
const numbers = [33, 10, 55, 71, 29, 3];
const pivotIndex = 2; // Choosing 55 as pivot
console.log("Sorted array:", quickSortWithPivot3(numbers, pivotIndex));
