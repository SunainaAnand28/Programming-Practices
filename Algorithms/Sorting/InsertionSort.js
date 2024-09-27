// Insertion Sort

function insertionSort(arr){
 
    for(let i = 1; i<arr.length; i++){
        let current = arr[i];
        let j = i-1;

        while(j >= 0 && arr[j] > current){
            arr[j+1] = arr[j];
            j--;
        }

        arr[j+1] = current;
    }

    return arr;

}

let data = [5,4,3,71,2,1,75];
let sortedData = insertionSort(data);
console.log(sortedData);