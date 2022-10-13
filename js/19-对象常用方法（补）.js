// Object.assign(target, ...sources)：对象合并，其中 target 是目标对象，它在合并了源对象的属性后返回，source 是源对象
// Object.assign() 可以实现对象的拷贝，当源对象仅有一层时实现的是深拷贝，反之则是浅拷贝
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target); // { a: 1, b: 4, c: 5 }
console.log(returnedTarget === target); // true

// 利用 Object.assign() 实现对象的浅拷贝
const obj1 = {a: 1, b: {v: 2}};
const obj2 = Object.assign({}, obj1);
console.log(obj1 === obj2) // false
obj2.b.v = 3;
console.log(obj1.b.v) // 3

// 利用 Object.assign() 实现对象的深拷贝
const obj3 = {a: 1, b: 2};
const obj4 = Object.assign({}, obj3);
console.log(obj3 === obj4); // false