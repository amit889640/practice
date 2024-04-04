// Zomato System Design

/*
System requirement
Functional 
1. Food item
1.a. item add on 
2. Food Category
3. Restaurant
4. User / Customer
5. Delivery Person
6. Payment

Mananer
1. Food Delivery Service
2. Food Restuarant Mngr

Non function
1. Availability
2. Consistency
*/


const DeliveryAgentType = Object.freeze({
    FAST: 'FAST',
    SUPER_FAST: 'SUPER_FAST',
    SLOW: 'SLOW'
})

const FoodType = Object.freeze({
    VEG: 'VEG',
    NON_VEG: 'NON_VEG',
})

const PaymentStatus = Object.freeze({
    PAID: 'PAID',
    NOT_PAID: 'NOT_PAID',
    CASH_ON_DELIVERY: 'CASH_ON_DELIVERY',
    PROCESSING: 'PROCESSING',
    FAILED: 'FAILED',
})

const OrderStatus = Object.freeze({
    ORDER_RECEIVED: 'ORDER_RECEIVED',
    ORDER_BEING_PREPARED: 'ORDER_BEING_PREPARED',
    ORDER_PREPARED: 'ORDER_PREPARED',
    READY_TO_DELIVER: 'READY_TO_DELIVER',
    DELIVERED: 'DELIVERED',
})

class FoodItem {
    constructor(name, price, itemCategory, itemAddOn) {
        this.name = name;
        this.price = price;
        this.itemCategory = itemCategory;
        this.itemAddOn = itemAddOn;
    }
}

class FoodAddOn {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class FoodCategory {
    constructor(name, type = 'veg') {
        this.name = name;
        this.type = type;
    }
}

class Restaurant {
    constructor(name, place, pincode, type = 'veg') {
        this.name = name;
        this.place = place;
        this.pincode = pincode;
        this.type = type;
        this.food = []
    }
}


class DeliverAgent {
    constructor(name, pincode, type = DeliveryAgentType.FAST) {
        this.name = name;
        this.pincode = pincode;
        this.type = type;
    }

    updatePin(pin) {
        this.pincode = this.pincode;
    }
}

class Order {
    constructor(orderId, foodItem, invoice, deliverAddress, phoneNumber, agent) {
        this.orderId = orderId;
        this.foodItems = foodItem;
        this.deliverAddress = deliverAddress;
        this.phoneNumber = phoneNumber;
        this.deliverAgent = agent
        this.orderStatus = OrderStatus.ORDER_RECEIVED
    }
}


class OrderManager {
    constructor() {
        this.orders = [];
        this.deliveredOrder = [];
        this.unDeliveredOrder = [];
    }

    setOrder(order) {
        this.orders.push(order)
    }

    assignAgentToOrder(order, agent) {
        order.deliverAgent = agent;
        order.status = OrderStatus.DELIVERED
    }

    getOrderById(phoneNumber) {
        this.orders.find((order) => order.phoneNumber == phoneNumber)
    }
}

class RestaurantManager {
    constructor() {
        this.restaurant = [];
        this.foodItems = [];
        this.itemAddOn = [];
        this.foodCategory = [];
    }

    findRestroByFilter() {
        return this.restaurant[0];
    }

    setRestro(restro) {
        this.restaurant.push(restro);
    }

    setFoodItemInRestroById(RestroId, foodItem) {
        const restaurant = this.restaurant.find(restro => restro.id == Id);
        restaurant.food.push(foodItem);
    }

    getRestro() {
        return this.restaurant;
    }

}


class Payment {

    pay(order, status = PaymentStatus.CASH_ON_DELIVERY) {
        // processing payment
        return this.createInvoice(order);
    }

    createInvoice(order) {
        let total = 0;
        let addOnTotal = 0;
        order.foodItem.forEach(item => {
            total += item.price;
        });
        return total;
    }

}

// foodItems
const orderMgr = new OrderManager();
const RestroMgr = new RestaurantManager();
const payment = new Payment();

const angethee = new Restaurant('Angethee', 'DLW', 221004);


const toppingCheese = new FoodAddOn('Extra-cheese', 20);
const pizza = new FoodCategory('Pizza', FoodType.VEG);
const magherita = new FoodItem('Maghereta', 100, pizza, [toppingCheese]);


const pasta = new FoodCategory('Pasta', FoodType.VEG);
const masalaPasta = new FoodItem('Masala Pasta', 120, pasta, [toppingCheese]);

angethee.food.push(magherita);
angethee.food.push(masalaPasta);

console.log('-'.repeat());
console.log(JSON.stringify(angethee));


RestroMgr.restaurant.push(angethee);
RestroMgr.foodItems.push(magherita);
RestroMgr.foodCategory.push(pizza);

const agent1 = new DeliverAgent('Sam', '221004');

const order1 = new Order(1, [magherita, masalaPasta], '552/H, DLW, Varanasi', 8896);

payment.pay(order1, PaymentStatus.PAID);

orderMgr.assignAgentToOrder(order1, agent1);

orderMgr.setOrder(order1);
// console.log(orderMgr.orders)
// console.log(orderMgr.getOrderById(8896))




