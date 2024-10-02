// Quick Sort

function quickSort(arr) {
    // if the array has 0 or 1 element, it's already sorted
    if (arr.length <= 1) {
      return arr;
    }
  
    // Choose a pivot
    const pivot = arr[arr.length - 1];
  
    // Partition the array
    const left = [];
    const right = [];
    
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
  }
  
  const array = [10, 7, 8, 9, 1, 5];
  console.log(quickSort(array)); 
  