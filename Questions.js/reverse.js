let s = "Amit kumar";
// console.log(s.split("").reverse().join(""));


// function reverseString(st) {
//     let reverseString = "";
//     // we should not use this classic for loop 
//     // for (let i = st.length - 1; i >= 0; i--) {
//     //     reverseString += st[i];
//     // }

//     // for (let c of st) {
//     //     reverseString = c + reverseString;
//     // }

//     return reverseString;
// }

function reverseString(st) {
    return st.split("").reduce((acc, char) => char + acc,'')
}

console.log(reverseString("Amit Kumar")); 
