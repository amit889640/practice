function pal(st) {
    return st.split("").every((char, i) => {
        return char === st[st.length - 1 - i];
    }) 
}

function palInt(num) {
   let  n = Math.abs(num);
    let currentNo = 0;
    while (n > 0) {
        let lastDigin = n % 10;
        currentNo = currentNo * 10 + lastDigin; 
        n = parseInt(n / 10);
    }
    if (num<0) {
        return Math.sign(num) * currentNo;
    }
    return currentNo;
}

// console.log(pal("aabcbaa"));
console.log(palInt(123));