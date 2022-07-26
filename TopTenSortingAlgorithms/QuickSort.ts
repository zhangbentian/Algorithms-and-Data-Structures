/*
 * @Description: 有问题,联系qq:2479879758
 * @Author: zhulinhai
 * @LastEditTime: 2022-07-26 15:15:43
 */
// 简单版，快排，牺牲性能，创建多个数组，进行回调。
// function quickSort(arr:Array<number>):Array<number> {
//     let len = arr.length;
//     if (len < 2) return arr;
//     let lArr:Array<number> = [];
//     let rArr:Array<number> = [];
//     let header = arr[0];
//     for (let i = 1; i < len; i++) {
//         if (header > arr[i]) {
//             lArr.push(arr[i])
//         } else {
//             rArr.push(arr[i])
//         }

//     }
//     lArr = quickSort(lArr);
//     rArr = quickSort(rArr); // 使用递归回调的方式
//     lArr.push(header);
//     return lArr.concat(rArr)
// }

// console.log(quickSort([4, 1, 6, 9, 3, 2, 8, 7]));

function swap (arr: { [x: string]: any; },left: string | number,right: string | number) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
}
// 标准快排
function FastSort(arr:Array<number>,start:number = 0,right = arr.length-1) {
    if(start >= right ) return; // 判断回调出口
    let base = arr[start];
    let left = start;
    ++left;
    while(left < right) {
        while(left<right && arr[left] <= base) left ++;
        while(left<right &&arr[right] >= base) right --;

        if(left < right){
            swap(arr,left,right);
        }
    }
    let swapPoint = left === right ? right-1:right;
    swap(arr,start,swapPoint);
    FastSort(arr,start,right -1);
    FastSort(arr,right)
    return arr;
}
console.log(FastSort([4,1,6,9,3,2,8,7]));