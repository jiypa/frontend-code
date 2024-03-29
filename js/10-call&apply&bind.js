const person = {
    getInfo: function(sex, fine) {
        console.log(this.name);
        if (sex) {
            console.log('他是男生');
            if (fine) {
                console.log('他身体很好');
            } else {
                console.log('他身体不太好');
            }
        } else {
            console.log('她是女生');
            if (fine) {
                console.log('她身体很好');
            } else {
                console.log('她身体不太好');
            }
        }
    }
}

const person1 = {
    name: 'Jeo'
}

const person2 = {
    name: 'Lisa'
}

let sex = 1;
let fine = 1;

person.getInfo.call(person1, sex, fine);
person.getInfo.call(person2, !sex, !fine);

person.getInfo.apply(person1, [sex, fine]);
person.getInfo.apply(person2, [!sex, !fine]);

let fun1 = person.getInfo.bind(person1, sex, fine);
let fun2 = person.getInfo.bind(person2, !sex, !fine);

fun1();
fun2();

// 总结：
// call、apply、bind的相同点：
// （1）均为函数的方法
// （2）传递的第一个参数均为this指针所指对象
// （3）作用相同
// call、apply的相同点与不同点：
// 相同点：均可直接调用方法
// 不同点：传递的参数形式不同，apply第二个参数为数组，call不是
// call、bind的相同点与不同点：
// 相同点：传递的参数形式相同
// 不同点：call可直接调用方法，bind不可以