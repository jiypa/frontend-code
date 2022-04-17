// 原型（对象）：每一个对象都有一个属于它自己的原型对象，它可以使用自己原型对象上的所有属性和方法
// 获取原型（对象）的方法：
//  1.通过对象的__proto__属性获取
//  2.通过构造函数的prototype属性获取
//  3.通过类的prototype属性获取
// 原型（对象）的作用：扩展对象，可以是内置对象，也可以是自定义对象
// 例：使用原型（对象）对内置Date对象进行扩展
Date.prototype.format = function() {
    let year = this.getFullYear();
    let month = this.getMonth() + 1;
    let date = this.getDate();
    return `今天是${year}年${month}月${date}日`;
}
let d = new Date();
console.log(d.format()); // 今天是2022年4月17日