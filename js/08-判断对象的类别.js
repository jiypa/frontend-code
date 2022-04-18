function Person() {
    this.name = 'Jeo';
    this.age = 22;
}
let p = new Person();
console.log(p.name);
console.log(p.age);
console.log(p instanceof Person); // true
console.log(Object.prototype.toString.call(p)); // [object Object]
console.log(Object.prototype.toString.call(new Date())); // [object Date]