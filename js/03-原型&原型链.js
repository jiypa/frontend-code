// 原型（对象）：每一个对象都有一个属于它自己的原型对象，它可以使用自己原型对象上的所有属性和方法
// 获取原型（对象）的5种方法：
//  1.通过对象的__proto__属性获取
//  2.通过对象的constructor.__proto__属性获取（返回的是一个函数，只能读不能写）
//  3.通过构造函数的prototype属性获取
//  4.通过类的prototype属性获取
//  5.通过Object.getPrototypeOf(对象)方法获取（最推荐）
// 原型（对象）的作用：扩展对象，可以是内置对象，也可以是自定义对象
// 例：使用原型（对象）对内置Date对象进行扩展

// 使用Object.getPrototypeOf()方法
Object.getPrototypeOf(new Date()).format = function() {
    let year = this.getFullYear();
    let month = this.getMonth() + 1;
    let date = this.getDate();
    return `今天是${year}年${month}月${date}日`;
}

// 使用__proto__属性
// new Date().__proto__.format = function() {
//     let year = this.getFullYear();
//     let month = this.getMonth() + 1;
//     let date = this.getDate();
//     return `今天是${year}年${month}月${date}日`;
// }

// 使用prototype属性
// Date.prototype.format = function() {
//     let year = this.getFullYear();
//     let month = this.getMonth() + 1;
//     let date = this.getDate();
//     return `今天是${year}年${month}月${date}日`;
// }

let d = new Date();
console.log(d.format()); // 今天是2022年4月17日