// make chunk of the array 
// paramter size of chunk and array

function arrayChunk1(arr,size) {
    const chunked = [];
    let smallChunk = [];
    for (let el of arr) {
        if (smallChunk.length == size) {
            chunked.push(smallChunk);
            smallChunk = [];
        }
        smallChunk.push(el)
    }
    chunked.push(smallChunk);
    return chunked;
}

function arrayChunk2(arr, size) {
    const chunked = [];
    for (let el of arr) {
        const last = chunked[chunked.length - 1];
        if (!last||last.length==size) {
            chunked.push([el]);
        } else {
            last.push(el);
        }
    }
    return chunked;
}

function arrayChunk3(arr, size) {
    const chunked = [];
    for (let i = 0; i < arr.length; i += size){        
        chunked.push(arr.slice(i,size+i))
    }
    return chunked;
}

console.log(arrayChunk3([1,2,3,4,5,6,7,8,9],4))