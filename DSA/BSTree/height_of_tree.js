function heighOfTree(nodes) {
    return Math.ceil((Math.log(nodes + 1)) / Math.log(2)) - 1;
}

console.log(heighOfTree(7));