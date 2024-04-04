const { Fifo, Lifo } = require('./strategy.js')

class TicketManagement {
    constructor() {
        this.tickets = [];
    }

    create(desc) {
        this.tickets.push(desc);
    }

    ticketResolve(tickets) {
        tickets.forEach(ticket => {
            console.log(`Ticket is resolved:- ${ticket}`);
        });
    }
}


const tM = new TicketManagement();
tM.create('ticket 1');
tM.create('ticket 2');
tM.create('ticket 3');
tM.ticketResolve(Lifo.strategy(tM.tickets))