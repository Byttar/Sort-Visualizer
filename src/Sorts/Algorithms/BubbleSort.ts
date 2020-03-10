import { swap } from '../Helpers/Swap';

export const BubbleSort = function(arr: Array<Number>){

    const size = arr.length;
    const moves = [];


    for(let i = 0; i < size; i++){
      for(let j = 0; j < size-i+1; j++){
        if(arr[j] > arr[j+1]){
          moves.push([j , j+1]);
          arr = swap(arr, j, j+1);
        }
      }
    }

    return moves

}

