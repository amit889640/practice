class Person {
    name: string = '';
    age: number = 0;
    static age: number = 0;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    display() {
        console.log(`name:${this.name} age: ${this.age}`)
    }

    // public static show(): void {
    //     console.log(this.display())
    // }
}


let p = new Person('amit', 28)
p.display()
console.log(typeof Person)