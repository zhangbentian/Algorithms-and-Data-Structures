/*
 * @Description: 有问题,联系qq:2479879758
 * @Author: zhulinhai
 * @LastEditTime: 2022-07-25 09:30:53
 */
// 冒泡排序稳定  https://blog.csdn.net/weixin_44820625/article/details/106737719
// 使用右侧最大冒泡排序
function BubbleSort(nums:Array<number>) {
    const len = nums.length;
    let count:number = len;
    let tmp:number;
    while(count) {
        for (let index = 0; index < count; index++) {
            if(nums[index]>nums[index+1]) {
              tmp = nums[index];
              nums[index] = nums[index+1];
              nums[index+1] = tmp;
            }
         }
         --count;
    }
    return nums;
}
console.log(BubbleSort([4,1,6,9,3,2,8,7]));

// 使用js写法
/*
 * @Description: 有问题,联系qq:2479879758
 * @Author: zhulinhai
 * @LastEditTime: 2022-07-23 11:15:58
 */
// 排序的本质是比较和交换
// let a = [4,1,6,9,3,2,8,7];
// function mySort(arr,fun=(a,b)=>a-b){
//     let len = arr.length;
//     while(len) {
//         for (let i = 0; i < len; i++) {
//            if(fun(arr[i],arr[i+1])>0) {
//                 let tmep = arr[i];
//                 arr[i] = arr[i+1];
//                 arr[i+1] = tmep;
//            }  
//         }
//         // console.log(arr);
//         len --;
//     }
//     return arr;
// }
// console.log(mySort(a),(a,b)=>b-a);