class Item {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class Order {
    constructor(id, items, address) {
        this.id = id;
        this.address = address;
        this.isPaid = false;
        this.totalPrice = 0;
        this.items = items;
    }

}

class PaymentAuthorization {
    // constructor() {
    //     throw new Error('this is base class')
    // }
    verification(number) {
        if (number.length == 19) {
            return true;
        }
    }
}

class PaymentBase extends PaymentAuthorization {
    payCreditCard(creditCard, order) {
        if (this.verification(creditCard)) {
            order.isPaid = true;
            console.log('Payment has been done by credit card');
        }
        else {
            console.log('Verification of credit card failed');
        }
    }

    payMobile(mobile, order) {
        order.isPaid = true;
        console.log('Payment has been done by mobile');
    }
}


let i1 = new Item('s23 ultra', 100000);
let i2 = new Item('charger s23', 5000);
let order = new Order(1, [i1, i2], 'Varanasi');
let payment = new PaymentBase();
payment.payCreditCard('1234-1234-1234-1324', order);
