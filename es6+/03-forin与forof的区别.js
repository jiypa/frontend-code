// for in 以任意顺序迭代对象的可枚举属性，for of 用于遍历可迭代对象
// for in 遍历的是 key，for of遍历的是 value
const arr = [1, 2, 3, 4, 5];

for (const key in arr) {
    console.log(key); // 0 1 2 3 4
}

for (const value of arr) {
    console.log(value); // 1 2 3 4 5
}

const obj = {
    name: 'Jeo',
    age: 23,
    sex: 1
};

for (const key in obj) {
    console.log(key); // name age sex
}

for (const value of Object.values(obj)) {
    console.log(value); // Jeo 23 1
}