// 数组.forEach()和数组.map()方法都可以用来遍历数组，形参都是一个回调函数
const arr = [1, 2, 3, 4, 5];

// 数组.forEach()方法没有返回值，它仅仅只是遍历数组中的每一项，默认不会修改原来的数组，但是可以通过数组的索引来修改原来的数组
arr.forEach((item, index, array) => {
    item *= 2;
    array[index] = item; // 通过索引修改原数组
})
console.log(arr); // [ 2, 4, 6, 8, 10 ]

// 数组.map()方法有返回值，返回的是一个新数组，它也不会修改原数组
const res = arr.map((item, index, array) => {
    return item *= 2;
})
console.log(res); // [ 4, 8, 12, 16, 20 ]