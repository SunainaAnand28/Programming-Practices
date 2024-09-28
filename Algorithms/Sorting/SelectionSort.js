function selectionSort(arr){
    let n = arr.length;

    for(let i = 0; i < n-1; i++){
        let minElement = i;

        for(let j = 1+1; j <n; j++){
            if(arr[j] < arr[minElement]){
                if (arr[j] < arr[minElement]){
                    minElement= j;
                }
            }

            if(minElement !== i) {
                let temp = arr[i];
                arr[i] = arr[minElement];
                arr[minElement] = temp;
            }
        } 
    }

    return arr;

}

let data = [5,6,3,2,2,57,8,1];
let sortedData = selectionSort(data);
console.log(sortedData);