function Person(name) {
    this.name = name;
}
Person.prototype.sayName = function () {
    console.log(this.name)
}

let per1 = new Person('Charles');
let per2 = new Person('Jackie');

per1.sayName();
per2.sayName();