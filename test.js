class Show {
    constructor(startTime, movieName, screen) {
        this.startTime = startTime;
        this.movieName = movieName;
        this.movieTime = ''
        this.screen = screen;
    }

    setSeatOccupied(seatNo) {
        let seat = this.screen.seats.flat(Infinity);
        let seatToBeOccupy = seat.find(s => s.seatNo == seatNo);
        console.log(seatToBeOccupy);
        seatToBeOccupy.doFillSeat();
    }

    displaySeat() {
        // console.log(this.screen.seats);
        let tempRow = '';
        for (let i = 0; i < this.screen.seats.length; i++) {
            for (let j = 0; j < this.screen.seats[i].length; j++) {
                tempRow += `${this.screen.seats[i][j].seatNo} - Occupied ${this.screen.seats[i][j].isOccupied}       `;
            }
            tempRow += '\n';
        }
        console.log(tempRow);
    }
}

class Screen {
    constructor(id, row, column) {
        this.id = id;
        this.noOfSeat = row * column;
        this.seats = [];
        this.generateSeat(row, column);
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

let T1S1 = new Screen('T1S1', 4, 4);
let T1S2 = new Screen('T1S1', 6, 4);
let T1 = new Theatre(1, 'Ip-Sigra', [T1S1, T1S2]);

let Sh1 = new Show('12:00', 'Shitaan', T1S1);
Sh1.displaySeat();
Sh1.setSeatOccupied('A-2');
Sh1.displaySeat();



// Booking



