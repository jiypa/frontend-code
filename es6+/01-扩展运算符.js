// 展开字符串
const str = 'Hello World';
console.log(...str); // H e l l o   W o r l d

// 展开数组
const nums = [1, 2, 3, 4, 5, 6];
console.log(...nums); // 1 2 3 4 5 6

// 展开对象
const jeo = {
    name: 'Jeo',
    age: 22,
    sex: '男'
}
console.log({...jeo});

// 展开集合
const set = new Set();
for (let i = 0; i < 10; i++) {
    set.add(i);
}
console.log(...set);

// 展开映射
const map = new Map();
map.set('name', 'Jeo');
map.set('age', 22);
map.set('sex', '男');
console.log(...map);