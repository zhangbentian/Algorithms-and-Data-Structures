/*
 * @Description: 有问题,联系qq:2479879758
 * @Author: zhulinhai
 * @LastEditTime: 2022-07-25 10:06:39
 */
// 排序的本质是比较和交换,十大排序算法没有优劣之分，只有不同的适应场景
function ChoiceSort(arr,fun = (a,b)=>a-b) {
    let len = arr.length;
    let temp;
    while(len) {
        let max = 0; // 每次都需要重置索引
        for (let i = 1; i < len; i++) {
            if(fun(arr[i],arr[max])>0) {
                max = i;
            }
        }
        temp = arr[len-1];
        arr[len-1] = arr[max];
        arr[max] = temp;
        console.log(arr[len-1],arr[max]);
        --len;
    }
    return arr;
}

console.log(ChoiceSort([4,1,6,9,3,2,8,7]));
// 9
//