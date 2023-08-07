//给出数字k，请输出所有结果小于k的整数组合到一起的最小交换次数。
//组合一起是指满足条件的数字相邻，不要求相邻后在数组中的位置。
//数据范围
//-100<=K<=100
//-100<=数组中的数值<=100


function swapK(arr, k) { //传说中的覆盖既是真理大法
    const len = arr.length; //源数组长度
    if(len <=2) {
        return 0;
    }
    const newArr = [...arr];
    let cnt = 0;
    for (let i = 0; i < len; i++) {
        if (newArr[i] < k) {
            cnt++; //记录小于k的数字数量
        }
    }
    let res = Infinity;
    for (let i = 0; i < len-cnt; i++) {
        let count = 0;
        for (let j = 0; j <cnt; j++) {
            if(newArr[i+j]>=k) {
                // console.log(i,j);
                count ++;
            }
            
        }
        res = Math.min(res,count);
    }
    return res;
}
console.log(swapK([1,3,3,3,1,3,3,1,3],2));