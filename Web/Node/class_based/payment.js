class PaymentBase {
    constructor(type, status) {
        this.type = type;
        this.status = status;
        console.log('Constructor from base class');
    }

    pay() {
        throw new Error('Object could not created')
    }


}

class CreditCardPayment extends PaymentBase {
    constructor() {
        super();
        console.log('child class cc');
    }

    pay() {
        console.log('Payment is done from CreditCardPayment class');
    }
}

let cc = new CreditCardPayment();
console.log(cc.pay());