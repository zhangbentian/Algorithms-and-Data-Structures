/**
 * @param {string} date
 * @return {string}
 */
var reformatDate = function(date) {
    let arr = date.split(' ');
    let Month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let monthIndex;
    const getDate = (d)=>{
        return d > 9 ? d: '0'+d
    }
    for (let i = 0; i < Month.length; i++) {
        if(arr[1]===Month[i]) {
            monthIndex = getDate(i+1)
        }
    }
    let DD = getDate(arr[0].replace(/[a-z]/g,''))
    let res = `${arr[2]}-${monthIndex}-${DD}`
    return res;
};
let date = "6th Jun 1933"

console.log(reformatDate(date));