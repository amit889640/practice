function flat(arr) {
    temp = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            temp = temp.concat(flat(arr[i]))
        } else {
            temp.push(arr[i])
        }
    }
    return temp
}

console.log(flat([1, 2, 3, 4, [6, 7, [8, 9], 10]]))