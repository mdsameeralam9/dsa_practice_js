// sorting algorithm

function concatArr(arr, arr2){
    let result=[], leftIndex=0, rightIndex=0;

    while(leftIndex < arr.length && rightIndex < arr2.length){
        if(arr[leftIndex] < arr2[rightIndex]){
            result.push(arr[leftIndex]);
            leftIndex++;
        } else {
            result.push(arr2[rightIndex]);
            rightIndex++;
        }
    }

    return  result.concat(arr.slice(leftIndex), arr2.slice(rightIndex))

}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
   
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return concatArr(left, right)
  
}

const arr = [0, -1234454, 11, -12890, 17, 33, 300000000, -100, 49948, 2334353, 458];
console.log(mergeSort(arr));
