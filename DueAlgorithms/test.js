function test(n) {
    console.time('test')
    let k = 1;
    for (let i = 0; i < n; i++) {
        k++;
    }
    console.timeEnd('test')
    return k;
}
test(5*10^9)

// function test2n(n) {
//     console.time('test2n')
//     let k = 1;
//     for (let i = 0; i < n; i++) {
//         k++;
//     }
//     console.timeEnd('test2n')
//     return k;
// }

// test2n(5*10^9)

