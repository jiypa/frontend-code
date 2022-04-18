// 13
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
// 14
console.log(typeof NaN); // number
console.log(NaN === NaN); // false
console.log(NaN !== NaN); // true
// 16
const arr = new Array(5);
console.log(arr.length); // 5
// 18
console.log(Number(undefined)); // NaN
console.log(Number(null)); // 0
console.log(Number(true)); // 1
console.log(Number(false)); // 1
console.log(Number('')); // 0
console.log(Number('123')); // 123
console.log(Number('123abc')); // NaN
// 23
console.log(parseInt('123.4abc56')); // 123
console.log(parseFloat('123.4abc56')); // 123.4
console.log(Number('123abc456')); // NaN
// 30
let number = 12000000.11;
console.log(number.toLocaleString('en')); // 12,000,000.11
console.log(Intl.NumberFormat().format(number)); // 12,000,000.11
// 32
console.log(Math.random()); // 随机生成[0, 1)之间的数