var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = '';
        this.age = 0;
        this.name = name;
        this.age = age;
    }
    Person.prototype.display = function () {
        console.log("name:" + this.name + " age: " + this.age);
    };
    Person.age = 0;
    return Person;
}());
var p = new Person('amit', 28);
p.display();
console.log(typeof Person);
