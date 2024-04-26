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
thread is single and it is taken or busy for while loop
and a is to be false after 2 second is waiting to get the a to be false as the thread is busy
if the any for while or any synchrounous function is busy or keep running the it make the thread busy untill it finishes
solition we have to use the child process function like fork
*/


/* 2.*/

// let a = true;
// let c = 1;
// setTimeout(() => {
//     a = false;
// }, 2000);

// setInterval(() => {
//     if (a) {
//         console.log(c++)
//     }
// }, 1999);

/*
Now it will print till 2 second because it is not getting the thread block continously
as it stop after the 200 ms and making the a false after the 2s result in the stopping the print.

*/

/* 3. */

// let a = true;
// let c = 1;


// let d = setInterval(() => {
//     if (a) {
//         console.log(c++)
//     }
// }, 200);

// setTimeout(() => {
//     clearInterval(d)
// }, 2000);

/* print till 2s */

/* 4. */

// setTimeout(() => {
//     console.log('set timeout')
// }, 0);

// console.log('hello console.log')

/*
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

// because - can operate only on the number so it changes the '2' to number 2 and substract

/* 6 */

// remove duplicacy

// let num = [1, 2, 2, 3, 3, 5, 5]

// console.log(Array.from(new Set(num)))
// to convert into array

// console.log([...new Set(num)])
// can also use spread operator to convert in array

/* 7. */

// console.log(5 < 6 < 7)  true

// console.log(7 > 6 > 5);  suppose to be tru but false

// because true is converted into 1 while using > operator

/* 8 */

// do not alllow the object to add more property

// let o = {
//     name: 'amit'
// }

// Object.freeze(o)  do not allow to add any more property

// Object.seal(o) do not allow to add but can modify existing

// o.age = 26

// console.log(o)

/* 9 */
// console.log(Math.max())
// output is -infinity
// because it take the min number and start comparing and found -infinity is max




// call apply bind

// obj1 = {
//     Name: "amit",
//     Age: 27,
// }

// obj2 = {
//     Name: "Sumit",
//     Age: 25
// }


// suppose you want to use a function to display both detail , but you dont want to add saperate function in both the obj
// then make the use of call


// function display(displayTime) {
//     console.log(`Name:${this.Name},Age:${this.Age}, Display time:${displayTime}`);
// }
// // this way you can call , calling display with obj1

// display.call(obj1, new Date()); //

// // bind is same but passing parameter is different

// display.apply(obj1, [new Date()]); //

// // bind return the new function that function is executable like:
// let printfn = display.bind(obj1, [new Date()]);

// printfn();


// console.log(this) // {} because its parent is iife not global object as js wrap everything in iife then execute it

// function demo() {
//     console.log(this);
// }

// demo();// this will print global object as its parent is not iife its parent is global object



// let demo = () => {
//     console.log(this); // this will print the {} because this is anonymous function and its parent is iife so.
// }

// demo();


clearTimeout(timer);
clearInterval(timer);









// synchrone

// 1st Round:

// Q. Write code:
// 1. String contains substring
// 2. Index of substring
// 3. no of occurrence of substring
// Without using String class methods

// Q. What is generics? Purpose of generics.
// A. type safety at compile time.
// Q. What happens in runtime?
// A. java erasure
// Q. how does it obtain the info of the class?

// Q. Annotations related to Hibernate? How are those internally implemented?
// Q. create custom annotation.
// Q. what is a comparator? how does comparator work internally?
// Q. what data structure would u prefer for searching large data sets?
// Q. inner join

// 2nd Round:

// Explain project.
// Implement SkippingIterator.
// What is deadlock?
// What is race condition?
// What design patterns do u know?
// What are SOLID principles?
// What is dependency injection and Inversion of control?
// difference between GET/POST/PUT/PATCH
// difference between controller and restcontroller?
// difference between spring and spring boot?
// what is MVC architecture?
// what is difference between multithreading and multitasking?

// 3rd Round:
// Using class.forName, print "hello world"
// What is threadlocal?
// synchronized keyword for objects and classes
// finally block execution
// equals and hashcode, what happens if we dont override any of them?

// Difference between abstract class and interface




// Interview Experience-
// Round 1:
// Explain your micro services project. Why it is good? How to handle failure/ service down?
// Implement a caching service using java and the runtime memory.
// Implement an iterator which prints alternate elements.
// Round 2:
// Purely java based round. All the aspects of core java was touched in this round.
// Round 3:
// Tech arch round. The arch came with a question printed on a paper. The question was ambiguous and hence there doesn’t exist an exact solution but they will expect the same code which they have in their mind.
// No questions from Data Structures or system design.
// This round was really a turn off for me.

// Given two linked list, can you tell if they intersect or not and if yes, at which node?

// Given array of walls of different heights. give the maximum amount of water that it can hold.

// Given an array of numbers containing a duplicates for every number except one element. Find the unique element


// Different design related questions, which could be resolved using Decorator, Observer, Iterator and other patterns.


// Synechron

// What is an event loop ?
// Promises, async / await are tools in JavaScript for handling asynchronous code more elegantly.
// what are three important states in JavaScript promise ?
// xplain destructuring for Array, Object or String in JavaScript, and what are uses ?
// Explain the Pure function in the javascript
// A Pure Function is a function (a block of code) that always returns the same result if the same arguments are passed.
// what is currying in the javascript
// It is a technique in functional programming, that transforms the function of multiple arguments into several functions of a single argument in sequence.
// explain sorting principles with examples

// Asked to explain design patterns
// Rest API interview questions mandatory
// Check balanced parenthesis
// Describe JavaScript closures and how to implement them
// Closure in JavaScript is a form of lexical scoping used to preserve variables from the outer scope of a function in the inner scope of a function



