// Adding new array function in Array prototype

// // Type 1
// Array.prototype.mulTwo = function (callBack) {
//     return this.map((n) => n * 2)
// }

// let a = [1, 2, 3, 4, 5];
// let newArray = a.mulTwo();
// console.log(newArray);



// Type 2

let a = [1, 2, 3, 4, 5];
Array.prototype.mulTwo = function (callBack) {
    let newArr = [];
    for (let i = 0; i < this.length; i++) {
        newArr.push(callBack(this[i]));
    }
    return newArr;
}
console.log(a.mulTwo((num => num * 2)));