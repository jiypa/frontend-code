// 对象属性劫持有两种方法：1.Object.defineProperty(ES5) 2.Proxy(ES6)
// ❗注意：两种方法 get 一定要有 return！！！
// 使用 Object.defineProperty 方法
const obj1 = {
    _name_: ''
};

Object.defineProperty(obj1, 'name', {
    configurable: true, // 属性能否被删除或重新设置，默认为 false
    enumerable: true, // 能否通过 for...in 循环来访问该属性，默认为 false
    // writable: true, // 属性能否被修改，默认为 false
    // value: 'Jeo', // 属性默认值，该项不写默认为 undefined，若写则先判断 obj 中是否提前设置，若已设置则以 obj 中的值为准，未设置才以 value 值为准

    // get 和 set 的默认值均为 undefined
    // 若已设置 get 或 set，则 writable 和 value 不能再被设置
    get() {
        console.log('get function');

        return this._name_;
    },
    set(newValue) {
        console.log('set function');
        this._name_ = newValue;
    }
});

obj1.name = 'Jeo';
console.log(obj1.name); // Jeo

// 使用 Proxy 对象
const obj2 = {
    name: 'Jeo'
};

const proxy = new Proxy(obj2, {
    get(obj, key) {
        console.log(obj);
        console.log(key);

        return obj[key] ? obj[key] : 'Error';
    },
    set(obj, key, value) {
        obj[key] = value;
    }
});

console.log(proxy.name); // Jeo
proxy.name = '乔';
console.log(proxy.name); // 乔
console.log(proxy.age); // Error