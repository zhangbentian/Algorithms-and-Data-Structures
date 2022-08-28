var answerQueries = function (nums, queries) {
    let arr = [];
    for (let i = 0; i < queries.length; i++) {
        let start = 0, end = 0, max = 0;
        let res = 0;
        for (let j = 0; j < nums.length; j++) {
            res += nums[j]
            if (res > queries[i]) {
                res -= nums[start]
                start++;
            }
            end++;

            if (max < end - start) {
                max = end - start;
                console.log("🚀 ~ file: index.js ~ line 14 ~ answerQueries ~ max", start, end)
            }
        }
        arr[i] = max;
    }
    return arr;

};

let nums = [736411, 184882, 914641, 37925, 214915], queries = [718089, 665450]

console.log(answerQueries(nums, queries));
console.log((914641 + 37925 + 214915) <= 718089);