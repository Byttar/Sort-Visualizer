import { swap } from '../Helpers/Swap';

export const InsertionSort = function(arr: Array<Number>){

    const size = arr.length;
    const moves = [];

    for(let i = 1; i < size; i++){

        let current = arr[i];
        let j = i - 1;

        while(j >= 0 && arr[j] > current){

            moves.push([j, j+1]);
            arr = swap(arr, j, j+1)
            j--;
        }

        arr[j + 1] = current;
    }
    

    return moves

}

