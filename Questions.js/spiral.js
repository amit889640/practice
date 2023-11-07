const n = 4;
limit = n * n;
a = [];
d = 1;
s = 1;
c = 1;
constR = 0;
constC = n-1;
constandDim = 0;
for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) { 
        if (d == 1) {
            if (a[i]) {
                a[i].push(c)
            } else {
                a[i] = [c];
            }
        }

        if (d == 2) {
            if (a[j]) {
                a[j][constC] = c;
            }
            else {
                a[j] = [];
                a[j][constC] = c;
            }
            constR = n - i-1;
        }

        if (d == 3) {
            a[constR][n - j] = c;
        }
        // if (d == 4) {
        //     if (a[n-j-1]) {
        //         a[n-j-1] = c;
        //     }
        //     else {
        //         a[n-i+1] = [];
        //         a[n-i+1][n - j-1] = c;
        //     }
        // }
        c++;
    }
    d++;
    if (d > 4) {
        d = 1;
    }
}


console.log(a);