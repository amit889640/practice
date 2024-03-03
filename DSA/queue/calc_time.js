// 2073. Time Needed to Buy Tickets

var timeRequiredToBuy = function (tickets, k) {
    let time = 0;
    while (tickets[k] != 0) {
        for (let i = 0; i < tickets.length; i++) {
            if (tickets[k] == 0) {
                return time;
            }
            if (tickets[i]) {
                time++;
                tickets[i]--;
            }
        }

    }
};
var timeRequiredToBuy1 = function (tickets, k) {
    let countTime = 0;

    while (tickets[k] !== 0) {

        for (let i = 0; i < tickets.length; i++) {

            if (tickets[k] == 0) {
                return countTime;
            }
            if (tickets[i] !== 0) {
                tickets[i] = tickets[i] - 1;
                countTime++;
            }
        }

    }

    return countTime;
};

console.log(timeRequiredToBuy([84, 49, 5, 24, 70, 77, 87, 8], 3));