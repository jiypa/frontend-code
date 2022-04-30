## 选择题：
1、promise，静态方法、实例方法
2、cookie、HTML5 存储
3、求数组最大值的方法：Math.max.call(null, 参数)
4、跨域的方法：jsonp、window.name、window.postMessage、document.domain
5、hasOwnpropery 的用法：obj.hasOwnProperty(prop)，该方法会忽略掉那些从原型链上继承到的属性。
6、原型链
7、js 阻止默认事件：preventDefault
8、删除数组中的第 i 个元素，下列最优方法
9、val 可以赋值任何值，（‘Value is’ + (val != ‘0’) ? ‘define’ : ‘undefined’）会打印什么？
## 问答题
1、GET、POST区别
GET在浏览器回退时是无害的，而POST会再次提交请求。
GET产生的URL地址可以被Bookmark，而POST不可以。
GET请求会被浏览器主动cache，而POST不会，除非手动设置。
GET请求只能进行url编码，而POST支持多种编码方式。
GET请求参数会被完整保留在浏览器历史记录里，而POST中的参数不会被保留。
GET请求在URL中传送的参数是有长度限制的，而POST没有。
对参数的数据类型，GET只接受ASCII字符，而POST没有限制。
GET比POST更不安全，因为参数直接暴露在URL上，所以不能用来传递敏感信息。
GET参数通过URL传递，POST放在Request body中

2、null 和 undefined 区别
undefined 代表的含义是未定义，null 代表的含义是空对象。一般变量声明了但还没有赋值的时候会返回 undefined，null主要用于赋值给一些可能会返回对象的变量，作为初始化。
undefined 在 js 中不是一个保留字，这意味着我们可以使用 undefined 来作为一个变量名，这样的做法是非常危险的，它会影响我们对 undefined 值的判断。但是我们可以通过一些方法获得安全的 undefined 值，比如说 void 0。
当我们对两种类型使用 typeof 进行判断的时候，Null 类型化会返回 “object”，这是一个历史遗留的问题。当我们使用双等号对两种类型的值进行比较时会返回 true，使用三个等号时会返回 false。

3、手写 fabonacci （斐波那契）数列，求某项的值
4、手写深拷贝
5、CSS 盒模型的理解
基本概念：标准模型+IE模型
CSS盒模型本质上是一个盒子，封装周围的HTML元素，它包括：内边距（padding），边框（border），margin（外边距），和内容（content）。
标准盒模型：一个块的总宽度=width+margin(左右)+padding(左右)+border(左右)
怪异(IE)盒模型：一个块的总宽度=width+margin（左右）（既width已经包含了padding和border值）
设置盒模型：box-sizing:border-box

相关链接：https://blog.csdn.net/qq_43510829/article/details/124277932