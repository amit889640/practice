function relation(x, y) {
    if (x == 0) {
        return "me!"
    }
    if (y == "m") {
        switch (x) {
            case -3: return "great grandfather"; break;
            case -2: return "grandfather"; break;
            case -1: return "father"; break;
            case 1: return "son"; break;
            case 2: return "grandson"; break;
            case 3: return " great grandson"; break;
        }
    } else if (y == "f") {
        switch (x) {
            case -3: return "great grandmother"; break;
            case -2: return "grandmother"; break;
            case -1: return "mother"; break;
            case 1: return "daughter"; break;
            case 2: return "granddaughter"; break;
            case 3: return " great granddaughter"; break;
        }
    }
}

console.log(relation(0))
