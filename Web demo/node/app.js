Array.prototype.mul = (e) => {
    console.log(e(this[0]))
    //     console.log(this)
}

arr = [1, 2, 3]
arr.mul((e) => {
    console.log(e)
    return e * 2
})
