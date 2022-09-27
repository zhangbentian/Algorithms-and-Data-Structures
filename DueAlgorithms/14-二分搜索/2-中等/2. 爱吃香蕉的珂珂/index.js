/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
//https://leetcode.cn/problems/koko-eating-bananas/

var minEatingSpeed = function (piles, h) {
    const n = piles.length;
    piles =piles.sort((a, b) => a - b)
    let left = 1, right = piles[n - 1];
    const time = (k) => {
        let res = 0;
        for (let i = 0; i < n; i++) {
            res += Math.ceil(piles[i] / k)
        }
        console.log(res);
        return res;
    }
    while (left < right) {
        const mid = Math.floor(left + (right - left) / 2)
        if (time(mid) === h) {
            right = mid;
        } else if (time(mid) > h) {
            left = mid+1;
        } else if (time(mid) < h) {
            right = mid;
        }
    }
    return left;
};

let piles = [312884470] ,h=312884469
console.log(minEatingSpeed(piles, h));