// 方式一：ES5中由于没有类的概念，继承需通过原型（对象）实现
function User(account, password) {
    this.account = account;
    this.password = password;

    this.login = function() {
        if (this.account === '123456' && this.password === '123456') {
            console.log('登录成功！');
        } else {
            console.log('登录失败！');
        }
    };
}

function Admin(account, password) {
    this.account = account;
    this.password = password;
    
    this.insertUser = function() {
        console.log('添加一位用户！');
    };
    this.deleteUser = function() {
        console.log('删除一位用户！');
    }
}

Admin.prototype = new User(this.account, this.password); // 通过原型实现继承

const admin = new Admin('123456', '123456');
admin.login();
// 方式二：ES6中已经有了类的概念，继承通过extends关键字实现，详见04