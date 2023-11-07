function getAllCapitalLetters(str) {
    const cLetter = [];
    for (c of str) {
        checkUpperCase(c) && cLetter.push(c);
    }
    console.log(cLetter);
}

function checkUpperCase(c) {
    return /[A-Z]/.test(c);
}
getAllCapitalLetters("asdAfGEUsfgR");

// console.log(checkUpperCase("z"));


