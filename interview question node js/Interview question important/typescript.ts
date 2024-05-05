/*
It is strongly typed languge, build on js.
As JavaScript projects grow in size, they become difficult to maintain.
Primitive:- string, number, and boolean

Any: when you dont know the type in advance

unknown: The unknown type is the type-safe counterpart of any type.
let foo: unknown = "Akshay"
let bar: string = foo as string;

let obj:{[key:string]:number}

Never: can be use as return type of fn other wise it will return undefined
A function that throws an error e.g function foo(){throw new Exception('Error message')}
function ErrorMsg(name:string):never{    
    throw new Error(name)
}

tsconfig.json
A tsconfig.json file in a directory marks that directory as the root of a TypeScript project
{
 "compilerOptions": {
   "module": "system",
   "noImplicitAny": true,
   "removeComments": true,
   "outFile": "../../built/local/tsc.js",
   "sourceMap": true
 },
}

Symbol A key characteristic of symbols is that they are unique and immutable.
let foo = Symbol("foo");
let newFoo = Symbol("foo");

let areEqual = foo === newFoo;
console.log(areEqual);  // false, symbols are unique 

TypeScript can infer the type of a variable when you don’t provide an explicit type.

interface
 specifying the type of data an object can have and its operations
 specify an object’s shape by creating an interface and using it as its type

Abstract classes are similar to interfaces in that they specify a contract for the objects, and you cannot instantiate them directly. However,unlike interfaces, an abstract class may provide implementation details for one or more of its members.

Tuples are a special type in TypeScript. They are similar to arrays with a fixed number of elements with a known type. However, the types need not be the same.
let values: [string, number] = ["Foo", 15];


type assertions 
let value: unknown = "Foo";
let len: number = (value as string).length;

How to enforce strict null checks in TypeScript?
providing the --strictNullChecks flag to the TypeScript (tsc) compiler
setting the strictNullChecks property to true in the tsconfig.json configuration file.

 immutable in TypeScript
 interface Coordinate {
readonly x: number;
readonly y: number;
}

let c: Coordinate = { x: 5, y: 15 };
c.x = 20; // Cannot assign to 'x' because it is a read-only property.(2540)


 ‘in’ operator.
const car = { make: 'Hyundai', model: 'Elantra', year: 2017 };
console.log('model' in car);  // true
console.log('test' in car);  // false

*/

function display({ a: number, b: string }) {

}