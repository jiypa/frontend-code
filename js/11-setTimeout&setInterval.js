// setTimeout：将函数推迟到一段时间间隔之后再执行，语法：let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...)
// setInterval：重复执行一个函数，从一段时间间隔之后开始执行，之后以该时间间隔连续重复执行该函数，语法：let timerId = setInterval(func|code, [delay], [arg1], [arg2], ...)
// 总结：setTimeout只执行一次，setInterval会执行多次
let tid1 = setTimeout(function() {
    console.log('Hello World');
}, 1000) // 等待1s后执行
console.log(tid1);

clearTimeout(tid1); // 由于先执行这句，定时器还未执行就被清除，故不会产生定时效果
console.log(tid1);

let tid2 = setInterval(function() {
    console.log('Hello World');
}, 1000)
console.log(tid2);

clearInterval(tid2); // 由于先执行这句，定时器还未执行就被清除，故不会产生定时效果
console.log(tid2);