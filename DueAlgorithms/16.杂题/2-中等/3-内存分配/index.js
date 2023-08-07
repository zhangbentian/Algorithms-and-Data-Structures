//有一个简易内存池，内存按照大小粒度分类，每个粒度有若干可用内存资源，用户会进行一系列内存申请，需要按需分配内存池中的资源，返回申请结果成功失败列表，分配规则如下:
    // 1.分配的内存要大于内存申请量，存在满足需求的内存就必须分配，优先分配颗粒度小的，但是内存不能拆分使用。
    // 2.需要按申请顺序分配，先申请的先分配。
    // 3.有可用内存分配则申请结果为true,没有可用的内存分配则返回false。、
    // 注:不考虑内存释放。

function memoryAllocation(mapMemory,arrMemory) {
    //使用tree进行升序排序
    //key：内存粒度大小
    //value-数量
    const res = [];
    for (let i = 0; i < arrMemory.length; i++) {
        let num =   arrMemory[i];
        let isFail = true;
        mapMemory.forEach((value,key,map) => {
            if(key>=num && value > 0 && isFail== true) { // 由于foreach只能跳出来一次，故需要通过判断isFail来判断是否已经完成空间分配。
                console.log(num,key,value);
                map.set(key,--value);
                res.push(isFail);
                isFail = false;
                return;
            }
        });
        if(isFail) {
            res.push(!isFail);
        }
       

    }
    return res;
}
//malloc
const map = new Map([[64,2],[128,1],[32,4],[1,128]]);

console.log(map);

const arr = [50,36,64,128,127];

console.log(memoryAllocation(map,arr));