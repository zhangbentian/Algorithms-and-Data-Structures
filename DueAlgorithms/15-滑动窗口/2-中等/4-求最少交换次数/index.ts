function swapKTS(arr: Array<number>, k: number): number {
    const len = arr.length; //源数组长度
    if (len <= 2) {
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
    for (let i = 0; i < len - cnt; i++) {
      let count = 0;
      for (let j = 0; j < cnt; j++) {
        if (newArr[i + j] >= k) {
          // console.log(i,j);
          count++;
        }
      }
      res = Math.min(res, count);
    }
    return res;
  }
  
  console.log(swapK([1, 2, 3, 4,2,1,1,1], 2));
  
  