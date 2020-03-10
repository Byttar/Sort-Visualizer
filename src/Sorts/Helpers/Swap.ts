export function swap(arr: Array<Number>, i: number, j: number){
    let x = arr[i];
    arr[i] = arr[j];
    arr[j] = x;
    return arr;
};