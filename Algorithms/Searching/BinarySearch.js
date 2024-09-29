// Binary Search

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      const middle = Math.floor((left + right) / 2);
  
      if (arr[middle] === target) {
        return middle;
      }
  
      if (target < arr[middle]) {
        right = middle - 1;
      } else {
     
        left = middle + 1;
      }
    }

    return -1;
  }
  
  const array = [3, 9, 10, 27, 38, 43, 82];
  const target = 38;
  
  const result = binarySearch(array, target);
  console.log(result); 
  