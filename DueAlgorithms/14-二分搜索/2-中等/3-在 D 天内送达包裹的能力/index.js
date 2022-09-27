/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
 var shipWithinDays = function(weights, days) {
    let n = weights.length;
    let left = 0, right = 1; //左右范围要判断好
    for (let i = 0; i < n; i++) {
        left = Math.max(left, weights[i]);
        right += weights[i];
    }
    const getdays = (weight) => {
        let days = 0;
        for (let i = 0; i < weights.length;) {
            // 尽可能多装货物
            let cap = weight;
            while (i < weights.length) {
                if (cap < weights[i]) break;
                else cap -= weights[i];
                i++;
            }
            days++;
        }
        return days;
    }
    while (left < right) {
        const mid = Math.floor(right + (left - right) / 2)
        if (getdays(mid) <= days) {
            right = mid;
        } else if (getdays(mid) > days) {
            left = mid + 1;
        }
    }
    return left;
};

let weights = [1, 2, 3, 1, 1], days = 4;

console.log(shipWithinDays(weights, days));
