/*
Factory pattern:-
centralized object generation
*/

class Tester {
    constructor(name, type) {
        this.name = name;
        this.type = 'Tester';
    }
}

class Developer {
    constructor(name, type) {
        this.name = name;
        this.type = 'Tester';
    }
}

class EmployeeFactory {
    static create(name, type) {
        switch (type) {
            case 'Tester': {
                return new Tester(name)
            }

            case 'Developer': {
                return new Developer(name)
            }
        }
    }
}


const emp = [];
emp.push(EmployeeFactory.create("Amit", 'Developer'))
emp.push(EmployeeFactory.create("Shivani", 'Tester'))
emp.push(EmployeeFactory.create("Vikas", 'Developer'))
emp.push(EmployeeFactory.create("Supriya", 'Tester'))

console.log(emp);