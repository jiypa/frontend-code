// 回调地狱：多个回调函数之间进行嵌套时会产生回调地狱，导致代码难以维护
// Promise对象和async函数的出现就是为了解决回调地狱的问题
// Promise对象的使用方法
// 异步方法并不会立即返回最终的值，而是会返回一个 Promise，以便在未来某个时候把值交给调用者
// 一个Promise一共有三种状态：pending（初始状态）、fulfilled（操作成功）、rejected（操作失败），其中，pending可以转化为fulfilled或rejected状态
url = 'http://localhost'
function getIndexPage(url) {
    return new Promise((resolve, reject) => {
        
    });
}

// async函数的使用方法