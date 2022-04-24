// 冒泡排序：从前往后或从后往前两两比较相邻元素的值，若为逆序则两者互换位置，直到序列比较完
function bubbleSort(array) {
    // 排序趟数，一趟排序只能确定一个元素最终的位置，所以共需要与元素个数相等次数趟排序
    for (let i = 0; i < array.length; i++) {
        // 元素交换次数，一趟排序内交换次数为元素个数 - i
        for (let j = 0; j < array.length - i; j++) {
            if (array[j + 1] < array[j]) {
                let temp = array[j];
                array[j] = array[j + 1]   
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

let arr = [49, 38, 65, 97, 76, 13, 27, 49];
console.log(bubbleSort(arr));