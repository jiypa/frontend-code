/*
    快速排序的步骤：
    1.选择数组中的第一个元素作为基准数
    2.遍历数组中的其他元素并与基准数做比较，比基准数小的元素放在左边数组，比基准数大的元素放在右边数组
    3.递归调用函数，对左右两边的数组分别进行遍历，直至参数个数为1，最后按顺序合并数组
*/ 
function quickSort(array) {
    // 这个判断是必须的
    if (array.length <= 1) {
        return array;
    }

    let left = [], right = [];
    let base = array.shift(); // 获取数组的第一个元素
    array.forEach(item => {
        if (item < base) {
            left.push(item);
        } else {
            right.push(item);
        }
    });

    return quickSort(left).concat(base, quickSort(right));
}

let arr = [49, 38, 65, 97, 76, 13, 27, 49];
console.log(quickSort(arr));