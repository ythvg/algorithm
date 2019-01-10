/*
    在一个无序整数数组中，找出连续增长片段最长的一段, 增长步长是1。
    Example: [3,2,4,5,6,1,9], 最长的是[4,5,6]
  */

/**
 * @author 方俊超 <geassor@gmail.com>
 */

/**
 * 
 * @param {输入数组} arr 
 * @param {步长} stepSize 
 */
function getLongestSlice(arr, stepSize=1) {
    let isArrayValid = arr.every( e => {
        return /^-?[1-9]\d*$|0/.test(e)
    })
    
    if (!isArrayValid) {
        console.error('格式不正确，传入无序整数数组')
        return;
    }
    
    let results = [];

    arr.forEach((e, i) => {
        const tempSlice = [];
        tempSlice.push(e);
        for (let j = i; j < arr.length; j++) {
            const increasedNum = arr[j] + stepSize;
            if (arr[j + 1] === increasedNum) {
                tempSlice.push(arr[j + 1])
            } else {
                break;
            }
        }
        if (tempSlice.length > results.length
            || (tempSlice.length === results.length && 
                tempSlice[0] > results[0])) {
            results = tempSlice;
        }

    });
    return results;
}

console.log(getLongestSlice([2, 4, 5, 8, 10, 11, 12, 6, 7]))

