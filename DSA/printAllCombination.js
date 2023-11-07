
function printAllComibination(arr) {
    for (let i = 0; i < arr.length; i++) {
        let arrTemp = [];
        for (let j = i; j < arr.length; j++) {
            arrTemp.push(arr[j]);
        }
        console.log(arrTemp);
    }
}

console.log(printAllComibination(['a', 'b', 'c']));