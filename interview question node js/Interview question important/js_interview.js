
<<<<<<< HEAD
/* 1.*/
// let a = true;
// let c = 1;
// setTimeout(() => {
//     a = false;
// }, 2000);

// while (a) {
//     console.log(++a);
// }

/* output - keep printing the ++a from while loop
=======
/*

let a = true;
let c = 1;
setTimeout(() => {
    a = false;
}, 2000);

while (a) {
    console.log(++a);
}

output - keep printing the ++a from while loop
>>>>>>> 004d31a18f8487451b267426e6eef16d72fb209f
thread is single and it is taken or busy for while loop
and a is to be false after 2 second is waiting to get the a to be false as the thread is busy
if the any for while or any synchrounous function is busy or keep running the it make the thread busy untill it finishes
solition we have to use the child process function like fork

2.
let a = true;
let c = 1;
setTimeout(() => {
    a = false;
}, 2000);

setInterval(() => {
    if (a) {
        console.log(c++)
    }
}, 1999);


Now it will print till 2 second because it is not getting the thread block continously
as it stop after the 200 ms and making the a false after the 2s result in the stopping the print.

3. 
let a = true;
let c = 1;


let d = setInterval(() => {
    if (a) {
        console.log(c++)
    }
}, 200);

setTimeout(() => {
    clearInterval(d)
}, 2000);

print till 2s 

4. 
setTimeout(() => {
    console.log('set timeout')
}, 0);

console.log('hello console.log')
output:-
hello console.log
set timeout

settimeout async funciton goes to event handler.
 */


/* 5 */
// console.log(2 + '2')
// op
// 22
// because + concate it thinking it is the string

// console.log(2 - '3')
// op
// 0

// console.log(1 + "2" + "2");  //112
// console.log(1 + +"2" + "2");  //32
// console.log(1 + -"1" + "2"); //02
// console.log(+"1" + "1" + "2"); //22
// console.log("A" - "B" + "2"); // NAN2
// console.log("A" - "B" + 2); // NAN


// because - can operate only on the number so it changes the '2' to number 2 and substract

5
console.log(2 + '2')
op
22
because + concate it thinking it is the string

console.log(2 - '3')

op
0

because - can operate only on the number so it changes the '2' to number 2 and substract

6. 
remove duplicacy

let num = [1, 2, 2, 3, 3, 5, 5]

console.log(Array.from(new Set(num)))
to convert into array

console.log([...new Set(num)])
can also use spread operator to convert in array

7.
console.log(5 < 6 < 7)  true
console.log(7 > 6 > 5);  suppose to be tru but false
because true is converted into 1 while using > operator

8
do not alllow the object to add more property

let o = {
    name: 'amit'
}

Object.freeze(o)  do not allow to add any more property

Object.seal(o) do not allow to add but can modify existing

o.age = 26

console.log(o)

9
console.log(Math.max())
output is - infinity
because it take the min number and start comparing and found - infinity is max


call apply bind

obj1 = {
    Name: "amit",
    Age: 27,
}

obj2 = {
    Name: "Sumit",
    Age: 25
}

suppose you want to use a function to display both detail, but you dont want to add saperate function in both the obj
then make the use of call

function display(displayTime) {
    console.log(`Name:${this.Name},Age:${this.Age}, Display time:${displayTime}`);
}
this way you can call, calling display with obj1

display.call(obj1, new Date()); 

 bind is same but passing parameter is different

display.apply(obj1, [new Date()]); 

 bind return the new function that function is executable like:
let printfn = display.bind(obj1, [new Date()]);

printfn();

console.log(this)  { } because its parent is iife not global object as js wrap everything in iife then execute it

function demo() {
    console.log(this);
}

demo(); this will print global object as its parent is not iife its parent is global object

let demo = () => {
    console.log(this); this will print the { } because this is anonymous function and its parent is iife so.
}

demo();

clearTimeout(timer);
clearInterval(timer);

to add function in array
Array.prototype.mul = function (fun) {
    let newArr = []
    for (e of this) {
        newArr.push(fun(e));
    }
    return newArr;
}



let arr = [1, 2, 3, 4, 5]
let newAr = arr.mul((e) => {
    return e * 2;
});
console.log(newAr)
Describe JavaScript closures and how to implement them

Closure in JavaScript is a form of lexical scoping used to preserve variables from the outer scope of a function in the inner scope of a function


    Promises
-are objects that represent the eventual outcome of an asynchronous operation.
- used to handle asynchronous operations
    - Three state = pending, fulfilled, or rejected.
- Promises, on the other hand, allow for asynchronous code to be written in a more organized fashion

Callbacks
    - A callback is a function that is passed as an argument to another function
-callbacks are often nested within one another, making them difficult to read and understand.

The async keyword transforms a regular JavaScript function into an asynchronous function, causing it to return a Promise. 
The await keyword is used inside an async function to pause its execution and wait for a Promise to resolve before continuing.

JavaScript modules allow you to break up your code into separate files.
This makes it easier to maintain the code - base.
ES Modules rely on the import and export statements.

A Map is an unordered list of key - value pairs where the key and the value can be of any type like string, boolean, number, etc.In a Weak Map, every key can only be an object and function
    WeakMap does not prevent the object from being garbage collected.


        Curring: - It is a technique in functional programming, that transforms the function of multiple arguments into several functions of a single argument in sequence.
Curring example
function mul(m) {
    return (n) => {
        if (!n) {
            return m;
        } else {
            return mul(m * n);
        }
    }
}
console.log(mul(3)(2)(4)())
    * /
