function minCost(s1, s2, l) {
    let c = 0;
    if (s1.length != s2.length) {
        console.log("lenght do not match"); {
            return;
        }
    }
    let sa1 = s1.split('');
    let sa2 = s2.split('');
    for (let i = 0; i < sa1.length; i++) {
        if (sa1[i] == sa2[i]) {
            c += 1;
            continue;
        }
        sa1 = swap(sa1, i);
        if (sa1[i] == sa2[i]) {
            continue
        } else {
            sa1 = swap(sa1, i);
        }
        sa1 = flip(sa1, i);
    }
    console.log(c)
}


function swap(s, i) {
    [s[i],s[i+1]]=[s[i+1],s[i]]
    return s;
}
function flip(s, i) {
    s[i]= s[i] ?  0 :  1;
    return s;
}
minCost('1101','0011',4)