import { BubbleSort } from './Algorithms/BubbleSort';
import { InsertionSort } from './Algorithms/InsertionSort';
import { MergeSort } from './Algorithms/MergeSort';

export default [
    {
        name : 'BubbleSort',
        sort : BubbleSort
    },
    {
        name : 'InsertionSort',
        sort : InsertionSort
    }
]

export const sort_names = [
    'BubbleSort', 'InsertionSort'
]

console.log(MergeSort([1,5,3,2]));

