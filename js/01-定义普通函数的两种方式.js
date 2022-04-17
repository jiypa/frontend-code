// 方式一：使用函数声明
function add(a, b) {
    console.log(this); // global
    console.log(arguments); // { '0': 1, '1': 2 }
    console.log(a + b);
}
// 方式二：使用函数表达式
const sub = function(a, b) {
    console.log(this); // global
    console.log(arguments); // { '0': 1, '1': 2 }
    console.log(a - b);
}

add(1, 2);
sub(1, 2);