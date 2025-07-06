// Binary search
function binarySearch(arr, value){
  let starIndex = 0
  let endIndex = arr.length-1;

  while(starIndex <= endIndex){
    let midIndex = Math.floor((starIndex+endIndex)/2);

    if(arr[midIndex] === value){
        return midIndex
    } else if(arr[midIndex] < value){
        starIndex = midIndex+1
    } else {
      endIndex = midIndex-1
    }
  }

  return -1
}

// second approach
function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) {
    return -1; // Base case: target not found
  }

  const mid = Math.floor((left + right) / 2);

  if (arr[mid] === target) {
    return mid; // Target found
  } else if (arr[mid] < target) {
    return binarySearchRecursive(arr, target, mid + 1, right); // Search right half
  } else {
    return binarySearchRecursive(arr, target, left, mid - 1); // Search left half
  }
}

// Linear search
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // Target found at index i
    }
  }
  return -1; // Target not found
}

function linearSearchByProperty(arr, key, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][key] === value) {
      return i; // Found the object with matching property
    }
  }
  return -1; // Not found
}

const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }
];

const index = linearSearchByProperty(users, 'name', 'Bob');
console.log(index); // Output: 1



