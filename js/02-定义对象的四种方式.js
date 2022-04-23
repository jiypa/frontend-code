/*
    对象属性的访问方式：
    1.若属性名是常量，则访问方式有两种：对象.属性名、对象[属性名]
    2.若属性名是变量，则访问方式只有一种：对象[属性名]
    总结：因为对象[属性名]的访问方式总是可行的，所以以后就用该方式来访问对象属性
*/ 
// 方式一：使用对象初始化器，也就是通过字面值创建对象
const timer = {
    tname: 'Jeo\'s Timer',
    getCurTime: function() {
        console.log(this); // global
        let d = new Date();
        let year = d.getFullYear();
        let month = d.getMonth() + 1;
        let date = d.getDate();
        return `今天是${year}年${month}月${date}日`;
    }
}

// 方式二：使用普通构造函数，创建对象时需要使用new关键字
// 这种方式实际上创建的是一个类，new相当于实例化，类经过实例化得到对象
function Person(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    console.log(this); // Person { name: 'Jeo', age: 22, sex: '男' }
    console.log(arguments); // { '0': 'Jeo', '1': 22, '2': '男' }
    this.getPerInfo = function() {
        return `我叫${this.name}，我今年${this.age}岁了，我是${this.sex}生`;
    };
}

// 方式三：使用Object()构造函数
// 情形一
const benz = new Object();
benz.name = 'Benz';
benz.age = 10;
benz.type = '轿车';
benz.getBenzInfo = function() {
    console.log(this); // { name: 'Benz', age: 10, type: '轿车', getBenzInfo: [Function] }
    return `这辆车是${this.name}牌的，车龄有${this.age}年了，它是一辆${this.type}`;
};

// 情形二
const tesla = new Object({
    name: 'tesla',
    age: 5,
    type: '轿车',
    getTeslaInfo: function() {
        console.log(this); // { name: 'tesla', age: 5, type: '轿车', getTeslaInfo: [Function: getTeslaInfo] }
        return `这辆车是${this.name}牌的，车龄有${this.age}年了，它是一辆${this.type}`;
    }
});

// 方式四：使用Object.create()方法，它可以基于现有对象创建新的对象实例
const ntimer = Object.create(timer);
ntimer.tname = 'Another New Timer';

// const {tname, getCurTime} = timer;
// console.log(tname);
// console.log(getCurTime());

// const jeo = new Person('Jeo', 22, '男');
// console.log(jeo.getPerInfo());

// console.log(benz.getBenzInfo());

// console.log(tesla.getTeslaInfo());

const {tname, getCurTime} = ntimer;
console.log(tname);
console.log(getCurTime());