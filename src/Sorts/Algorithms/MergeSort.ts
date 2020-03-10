import { swap } from '../Helpers/Swap';

const merge = function(left:Array<number>, right:Array<number>){
    const result = [];

    // console.log(left, right);
    while(left.length && right.length){

        if(left[0] <= right[0]){
         result.push(left.shift());
        }else{
          result.push(right.shift());
        }
    }

    while(left.length) result.push(left.shift());
          
    while(right.length) result.push(right.shift());

    console.log(result);
    return result;

}

export const MergeSort:any = function(arr: Array<Number>){

    const size = arr.length;
    const moves = [];

    if(arr.length < 2) return arr;

    const middle = Math.floor(size/2);

    const leftSide = arr.slice(0, middle);
    const rightSide = arr.slice(middle, size);

    return merge(MergeSort(leftSide), MergeSort(rightSide));

}

