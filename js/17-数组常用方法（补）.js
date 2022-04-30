const arr = [1, 2, 3, 4, 5];

// 获取数组最后一个元素
// console.log(arr[-1]); // undefined
console.log(arr[arr.length - 1]); // 5

// 获取元素在数组中对应的索引
console.log(arr.indexOf(5)); // 4

// 判断数组是否包含指定值
console.log(arr.includes(5)); // true
console.log(arr.includes(6)); // false

// 将数组中所有元素全部替换为指定值
// console.log(arr.fill(8)); // [ 8, 8, 8, 8, 8 ]

// 在数组末尾添加元素
arr.push(6);
console.log(arr); // [ 1, 2, 3, 4, 5, 6 ]

// 删除数组末尾的元素
arr.pop();
console.log(arr); // [ 1, 2, 3, 4, 5 ]

// 在数组开头添加元素
arr.unshift(0);
console.log(arr); // [ 0, 1, 2, 3, 4, 5 ]

// 删除数组开头的元素
arr.shift();
console.log(arr); // [ 1, 2, 3, 4, 5 ]

// 对数组进行排序
arr.sort((a, b) => {
    return b - a; 
});
console.log(arr); // [ 5, 4, 3, 2, 1 ]

// 将数组逆序排列
console.log(arr.reverse());

// arr.slice([begin[, end]])：将数组进行切片，范围左闭右开
console.log(arr.slice(1, 4)); // [ 2, 3, 4 ]

// arr.concat(value1[, value2[, ...[, valueN]]])：将多个数组进行合并
console.log(arr.concat([6, 7, 8])); // [ 1, 2, 3, 4, 5, 6, 7, 8 ]

// arr.splice(start[, deleteCount[, item1[, item2[, ...]]]])：动态增删数组元素，会影响到原素组
console.log(arr); // [ 1, 2, 3, 4, 5 ]
arr.splice(4, 1, 8);
console.log(arr); // [ 1, 2, 3, 4, 8 ]

// 将数组字符串化
// console.log(arr.toString());
// console.log(arr.toLocaleString());
// console.log(arr.join('-')); // // 将数组字符串化并指定分隔符