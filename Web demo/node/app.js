function createSlot(start, end, interval) {
    const slot = [];
    slot.push(start)
    let i = 0
    while (true) {
        let s = addInterval(start, interval);
        console.log(s);
        slot.push(s);
        i++
        start = s;
        if ((start.split(':')[0] == end.split(':')[0])) {
            break;
        }
    }
    return slot;
}

function addInterval(time, interval) {
    let [h, m] = time.split(':')
    let newM = +m + interval
    if (newM >= 60) {
        h = +h + 1;
        m = newM - 60;
    } else {
        m = newM;
    }
    h = String(h);
    m = String(m);
    console.log('====================================');
    console.log(h.length);
    console.log(m.length);
    console.log('====================================');
    if (h.length == 1) {
        h = '0' + String(h)
    }
    if (m.length == 1) {
        m = '0' + String(m)
    }
    console.log(`${h}:${m}`);
    return `${h}:${m}`
    // return ` ${(h.length == 1) ? '0' + h : h}:${(m.length == 1) ? '0' + m : m}`

}




console.log(createSlot('08:00', '14:00', 30));
// console.log(addInterval('08:30', 30));