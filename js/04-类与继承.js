// 类是在ES6中出现的，通过class关键字声明，实际上是ES5构造函数的语法糖
// 明确两对对应关系：父类——基类、子类——派生类
// 例：管理员类继承普通用户类实现添加删除用户的功能
class User {
    // 构造函数，进行初始化操作，创建对象实例的时候会被自动调用，但参数可传可不传
    // 一个类中只能有一个构造函数
    // 若不显式地指定构造函数，则会添加默认构造函数
    //  父类的默认构造函数为：constructor() {}
    //  子类的默认构造函数为：constructor(...args) { super(...args); }
    constructor(account, password) {
        console.log(arguments);
        console.log(this); // 哪个类调用就指向哪个类
        this.account = account;
        this.password = password;
    }
    login() {
        if (this.account === '123456' && this.password === '123456') {
            console.log('登录成功！');
        } else {
            console.log('登录失败！');
        }
    }
}
// 继承使用关键字extends
class Admin extends User {
    constructor(account, password) {
        // 在构造函数中可以调用super()来显式地调用父类的构造函数，若不调用super()则子类会隐式地调用构造函数
        // 在子类中, 必须先调用super()才能使用this，否则报错
        super(account, password);
        console.log(this); // 这句一定放在super()后
    }
    // 子类不能修改父类方法，但是可以重写父类方法，要求方法同名即可
    login() {
        if (this.account === 'admin' && this.password === 'admin') {
            console.log('登录成功！');
        } else {
            console.log('登录失败！');
        }
    }
    insertUser() {
        console.log('添加一位用户！');
    }
    deleteUser() {
        console.log('删除一位用户！');
    }
}

// const user = new User(); // 这样写也可以
const user = new User('123456', '123456');
user.login();

// const admin = new Admin(); // 这样写也可以
const admin = new Admin('admin', 'admin');
admin.login(); // 子类可以调用父类的方法
admin.insertUser();
admin.deleteUser();