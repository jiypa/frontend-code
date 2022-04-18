// 函数嵌套函数，内部函数就是闭包
// 闭包的特性：若内部函数没有执行完，外部函数中的局部变量不会被销毁
function outerFun() {
    let num = 10;
    function innerFun() {
        console.log(num);
    }
    return innerFun;
}
const fun = outerFun();
fun(); // 10

// 闭包的应用：闭包可以用来封装模块
function math() {
    let num1 = 1;
    let num2 = 2;
    function add() {
        return num1 + num2;
    }
    function sub() {
        return num1 - num2;
    }
    return {
        add, // ES6，当对象的属性和值相同时时的省略写法
        sub
    }
}
let m = math();
console.log(m.add()); // 3
console.log(m.sub()); // -1