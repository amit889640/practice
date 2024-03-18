class Show {
    constructor(startTime, movieName, screen, row, column) {
        this.startTime = startTime;
        this.movieName = movieName;
        this.movieTime = ''
        this.screen = screen;
        this.noOfSeat = row * column;
        this.seats = [];
        this.generateSeat(row, column);
    }

    setSeatOccupied(seatNo) {
        let seat = this.seats.flat(Infinity);
        let seatToBeOccupy = seat.find(s => s.seatNo == seatNo);
        seatToBeOccupy.doFillSeat();
    }

    displaySeat() {
        let tempRow = '';
        for (let i = 0; i < this.seats.length; i++) {
            for (let j = 0; j < this.seats[i].length; j++) {
                tempRow += `${this.seats[i][j].seatNo} - Occupied ${this.seats[i][j].isOccupied}`;
            }
            tempRow += '\n';
        }
        console.log(tempRow);
    }

    generateSeat(row, column) {
        for (let i = 65; i <= 64 + row; i++) {
            let tempColumn = [];
            for (let j = 1; j <= column; j++) {
                tempColumn.push(new Seat(`${String.fromCharCode(i)}-${j}`));
            }
            this.seats.push(tempColumn);
        }
    }
}

class Screen {
    constructor(id, name = null) {
        this.id = id;
        this.name = name && id;
    }
}

class Theatre {
    constructor(id, name, screen) {
        this.id = id;
        this.name = name;
        this.screen = screen;
    }
}

class Seat {
    constructor(seatNo) {
        this.isOccupied = false;
        this.seatNo = seatNo;
    }

    getSeatStatus() {
        return this
    }

    doFillSeat() {
        this.isOccupied = true;
    }

    doVacantSeat() {
        this.isOccupied = false;
    }
}

// Creating the theatre

let T1S1 = new Screen('T1S1');
let T1S2 = new Screen('T1S1');
let T1 = new Theatre(1, 'Ip-Sigra', [T1S1, T1S2]);

let Sh1 = new Show('12:00', 'Shitaan', T1S1, 4, 4);
let Sh2 = new Show('03:00', 'Pathan', T1S1, 4, 6);
console.log('================Screen 1====================');
Sh1.displaySeat();
Sh1.setSeatOccupied('A-2');
Sh1.setSeatOccupied('C-2');
Sh1.displaySeat();
console.log('============================================');

console.log('================Screen 2====================');
Sh2.displaySeat();
Sh2.setSeatOccupied('A-1');
Sh2.setSeatOccupied('A-2');
Sh2.setSeatOccupied('A-3');
Sh2.setSeatOccupied('B-3');
Sh2.setSeatOccupied('B-3');
Sh2.displaySeat();
console.log('============================================');



// Booking



