let obj = {
    item: {
        name: 'item1',
        item: {
            name: 'item3'
        }
    },
    name: 'amit',

}
let temp = []
function print(obj) {
    for (const key in obj) {
        if (typeof obj[key] == 'object') {
            print(obj[key]);
        }
        else {
            temp.push(obj[key])
        }
    }
    return temp
}


console.log(print(obj))