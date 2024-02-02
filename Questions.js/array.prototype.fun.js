Array.prototype.square = function () {
    for (let i = 0; i < this.length; i++) {
        this[i] = this[i] * this[i];
    }
    return this;
}


a = [1, 2, 3, 4, 5, 6];
console.log(a.square());