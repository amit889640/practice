let timer;
function debounce(func, ms = 1000) {
    clearTimeout(timer)
    timer = setTimeout(() => {
        func();
        console.log('api called')
    }, ms)
}


debounce()
debounce()
debounce()
debounce(() => {
    console.log('new api called')
}, 4000)