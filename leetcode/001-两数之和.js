/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let res = [];

    nums.forEach((item, index, array) => {
        let tarNum = target - item;
        for (let i = index + 1; i < array.length; i++) {
            if (array[i] === tarNum) {
                res.push(index);
                res.push(i);
            }
        }
    });

    return res;
};

console.log(twoSum([3, 3], 6));