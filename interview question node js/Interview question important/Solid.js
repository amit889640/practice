/*
SOLID is an acronym that represents five design principles in object-oriented programming. These principles help developers create software that is more maintainable, flexible, and scalable. The SOLID principles are:

1. Single Responsibility Principle (SRP): A class should have only one reason to change, meaning it should have only one responsibility or job. This promotes separation of concerns and makes the code easier to understand and maintain.
   
   // SIMPLE EXPLANATION:
   // Each class should do only ONE job. In an e-commerce system, Order class should only handle order data.
   // Example: Order class manages order info, not payments, emails, or inventory updates.
   // Benefits: If payment logic changes, you only update PaymentProcessor, not Order class.
   
   // BAD EXAMPLE (E-COMMERCE):
   // class Order {
   //   constructor(items, customer) { this.items = items; this.customer = customer; }
   //   saveToDatabase() { } // Database responsibility
   //   processPayment() { } // Payment responsibility
   //   sendOrderConfirmationEmail() { } // Email responsibility
   //   updateInventory() { } // Inventory responsibility
   // }
   
   // GOOD EXAMPLE (E-COMMERCE):
   // class Order {
   //   constructor(items, customer) { this.items = items; this.customer = customer; }
   //   getTotalPrice() { return this.items.reduce((sum, item) => sum + item.price, 0); }
   // }
   // class OrderRepository { save(order) { } }
   // class PaymentProcessor { process(amount, paymentMethod) { } }
   // class OrderNotification { sendConfirmationEmail(order) { } }
   // class InventoryManager { updateStock(items) { } }

2. Open/Closed Principle (OCP): Software entities (classes, modules, functions, etc.) should be open for extension but closed for modification. This means that you should be able to add new functionality without changing existing code, which helps prevent bugs and promotes code reuse.
   
   // SIMPLE EXPLANATION:
   // You should be able to ADD new payment methods without CHANGING PaymentProcessor code.
   // Think of it like a payment gateway that accepts different payment methods.
   // Example: Support Card, PayPal, Google Pay, Apple Pay without modifying PaymentProcessor.
   // Benefits: Adding new payment method = new class, not modifying existing code = no bugs!
   
   // BAD EXAMPLE (E-COMMERCE):
   // class PaymentProcessor {
   //   process(method, amount) {
   //     if (method === 'creditCard') { /* credit card logic */ }
   //     else if (method === 'paypal') { /* paypal logic */ }
   //     else if (method === 'googlePay') { /* google pay logic */ }
   //     // Every new payment method requires modifying this class!
   //   }
   // }
   
   // GOOD EXAMPLE (E-COMMERCE):
   // class PaymentProcessor {
   //   process(paymentMethod, amount) { return paymentMethod.charge(amount); }
   // }
   // class CreditCardPayment { charge(amount) { /* process card */ } }
   // class PayPalPayment { charge(amount) { /* process paypal */ } }
   // class GooglePayPayment { charge(amount) { /* process google pay */ } }
   // class ApplePayPayment { charge(amount) { /* process apple pay */ } }
   // // Add new payment types by just creating new classes, no changes to PaymentProcessor! 

3. Liskov Substitution Principle (LSP): Objects of a superclass should be replaceable with objects of a subclass without affecting the correctness of the program. This means that subclasses should be able to stand in for their parent classes without causing errors or unexpected behavior.
   
   // SIMPLE EXPLANATION:
   // All payment method subclasses should work where PaymentMethod is expected.
   // If your code accepts 'PaymentMethod', CreditCard, PayPal, etc. should work without breaking.
   // Example: Checkout process should work with any payment method subclass.
   // Benefits: Payment methods are truly interchangeable without affecting checkout logic.
   
   // BAD EXAMPLE (E-COMMERCE):
   // class PaymentMethod {
   //   charge(amount) { return { success: true, amount }; }
   // }
   // class CryptoCurrency extends PaymentMethod {
   //   charge(amount) { throw new Error("Crypto not supported in this region!"); }
   //   // Breaks the contract - checkout expects charge() to always work!
   // }
   
   // GOOD EXAMPLE (E-COMMERCE):
   // class PaymentMethod {
   //   charge(amount) { throw new Error("Implement in subclass"); }
   // }
   // class CreditCardPayment extends PaymentMethod {
   //   charge(amount) { return { success: true, amount, method: 'card' }; }
   // }
   // class CryptoCurrency extends PaymentMethod {
   //   charge(amount) { return { success: true, amount, method: 'crypto' }; }
   // }
   // // checkout(paymentMethod) { return paymentMethod.charge(amount); } // Works with ANY payment method!

4. Interface Segregation Principle (ISP): Clients should not be forced to depend on interfaces they do not use. This means that it's better to have multiple specific interfaces rather than a single general-purpose interface, which can lead to more flexible and maintainable code.
   
   // SIMPLE EXPLANATION:
   // Don't force payment methods to implement features they don't need.
   // Example: Not all payment methods support refunds, installments, or 3D secure.
   // Benefits: Each payment class implements only what it actually supports.
   
   // BAD EXAMPLE (E-COMMERCE):
   // class PaymentMethod {
   //   charge(amount) { }
   //   refund(amount) { }
   //   setupInstallments(months) { }
   //   enable3DSecure() { }
   // }
   // class CryptoCurrency implements PaymentMethod {
   //   charge(amount) { /* process */ }
   //   refund(amount) { throw new Error("Crypto can't be refunded"); } // Forced!
   //   setupInstallments(months) { throw new Error("Crypto doesn't support installments"); } // Forced!
   //   enable3DSecure() { throw new Error("Crypto doesn't use 3D Secure"); } // Forced!
   // }
   
   // GOOD EXAMPLE (E-COMMERCE):
   // class PaymentMethod { charge(amount) { } }
   // class RefundablePayment { refund(amount) { } }
   // class InstallmentPayment { setupInstallments(months) { } }
   // class SecurePayment { enable3DSecure() { } }
   // class CreditCard extends PaymentMethod implements RefundablePayment, InstallmentPayment, SecurePayment { }
   // class CryptoCurrency extends PaymentMethod { }
   // // Each payment method only implements what it actually supports!         

5. Dependency Inversion Principle (DIP): High-level modules should not depend on low-level modules. Both should depend on abstractions (e.g., interfaces). This promotes loose coupling and makes the code more flexible and easier to maintain.
   
   // SIMPLE EXPLANATION:
   // High-level Checkout doesn't depend on specific payment classes (CardPayment, PayPal).
   // Instead, both depend on PaymentMethod interface (abstraction).
   // Example: Checkout should work with any PaymentMethod, not hardcoded to specific ones.
   // Benefits: Swap payment methods without changing Checkout. Low-level changes don't break Checkout.
   
   // BAD EXAMPLE (E-COMMERCE):
   // class Checkout {
   //   constructor() {
   //     this.paypal = new PayPalPayment(); // Hardcoded low-level dependency!
   //   }
   //   processOrder(order) {
   //     return this.paypal.charge(order.total); // Only works with PayPal
   //   }
   // }
   
   // GOOD EXAMPLE (E-COMMERCE):
   // class Checkout {
   //   constructor(paymentMethod) {
   //     this.paymentMethod = paymentMethod; // Depends on abstraction, not concrete class
   //   }
   //   processOrder(order) {
   //     return this.paymentMethod.charge(order.total); // Works with ANY payment method!
   //   }
   // }
   // // Usage:
   // const checkout1 = new Checkout(new CreditCardPayment());
   // const checkout2 = new Checkout(new PayPalPayment());
   // const checkout3 = new Checkout(new GooglePayPayment());
   // // Same Checkout class, different payment methods!

By following the SOLID principles, developers can create software that is easier to understand, maintain, and extend over time. These principles are widely used in software development and are considered best practices for designing robust and scalable applications.  



*/
