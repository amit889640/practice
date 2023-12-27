function heightOfBTree(n) {
    let count = 0;
    let total = 1; let i = 1;
    while (total <= n) {
        total = total * 2;
        count++;
    }
    console.log(count);
}

heightOfBTree(4)