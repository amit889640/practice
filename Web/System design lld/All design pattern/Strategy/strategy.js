/*
It allows you to swap the strategy to perform the task
Like different shipping company for e-commerce
Different type of processing like lifo, fifo, RR
*/



class OrderTicketBase {
    strategy(tickets) {
        throw new Error('This is base class');
    }
}
class Fifo extends OrderTicketBase {
    strategy(tickets) {
        return tickets
    }
}

class Lifo extends OrderTicketBase {
    strategy(tickets) {
        return tickets.reverse();
    }
}

module.exports = {
    Lifo: new Lifo(),
    Fifo: new Fifo(),
}

