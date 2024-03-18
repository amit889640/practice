class item {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class order {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
    }

    getItem() {
        return this.items;
    }

    getTotal() {
        let total = 0;
        this.items.forEach(i => {
            total += i.price;
        });

        return total;
    }
    // breaking the single responsibility principle we have created the new class for payment;
}

// abstract class
class PaymentProcessor {
    constructor() {
        if (this.constructor == 'PaymentProcessor') throw new Error(`this is an abstract class`);
    }

    // liskov's substitution p is breaking here .
    pay(order) {
        throw new Error('this is abstract method');
    }


}

class PaymentThroughAuth extends PaymentProcessor {
    authorization(otp) {
        throw new Error('this is abstract method');
    }
}

class GPayPayment extends PaymentProcessor {
    constructor(mobileNumber) {
        super();
        this.mobileNumber = mobileNumber;
    }
    pay(order) {
        console.log(`Final Price is ${order.getTotal()}`);
        console.log(`Payment is done by GPay`);
        console.log(`Order is done`);
    }
}

class CreditCardPayment extends PaymentThroughAuth {
    constructor(creditCardNumber) {
        super();
        this.creditCardNumber = creditCardNumber;
        this.isValue = false;
    }

    authorization(opt) {
        this.isVerify = true;
    }

    pay(order) {
        if (!this.isVerify) throw new Error('Not authorized')
        console.log(`Final Price is ${order.getTotal()}`);
        console.log(`Payment is done by Credit card`);
        console.log(`Order is done`);
    }
}

let item1 = new item('I1', 20);
let item2 = new item('I2', 30);
let item3 = new item('I3', 50);

let orderNew = new order();
orderNew.addItem(item1);
orderNew.addItem(item2);

let payment = new CreditCardPayment('123-123-123-123');
payment.authorization(123)
payment.pay(orderNew);


