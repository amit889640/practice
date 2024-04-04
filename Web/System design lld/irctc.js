
/* 
System requirement

Functional Requirement
1. Search for available seat
    - src dest date
    - train by station data and time.

2. Train dest and src timing data
3. Allotment of seats for user
4. cancellation of seat
4. seats(status) - 1AC 2AC Sleeper General
5. Payment (ignore)
6. Notification of the pnr status


Non functional requirement
1. Consistency
2. Availability
3. Fault tolerance
 

Database

Entity
Train
train_name, train_no, src, dest,capacity, day_m,day_teu.......

Train_schedule_station
train_no, stoppage , arr_time, dep_time

Bookings
id, pnr,train_no, src, dest, arr_tim, dep_time, seat_no, seat_type, seat_status, starting_date, 


User
user_name, password, address , email, last_login

UserBooking
user_id, pnr, src, destination, trip_date

 */



class Seat {
    constructor(name, status) {
        this.name = name;
        this.status = status;
    }

    setSeatStatus(statusId) {
        this.status = statusId;
    }
    getSeatStatus() {
        return this;
    }
}



class Train {
    constructor(trainName, train_no, src, dest, capacity, trip_days) {

    }

    getTrainDetail(searchFields) {
        // get train by filter
    }
}


class BookingMngr {

    getAvailSeat(searchQuery) {
        // return {data:train_detail}
    }

    bookSeatProcess(seat_id) {
        checkSeatStatus(seat_id);
        bookSeat(seat_id);
    }

    bookSeat(id) {
        // return status
    }

    searchSeat() {
        // return seats
    }

    checkSeatStatus(id) {
        // return boolean
    }
}
