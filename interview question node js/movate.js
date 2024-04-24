// const EventEmitter = require('events');

// const eventE = new EventEmitter();

// eventE.on('show', () => {
//     console.log('show event has been triggered');
// })

// eventE.emit('show')



// function show() {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             console.log('show is called');
//         }, 1000);
//     })
// }

// async function showCalled() {
//     await show()
// }

// showCalled()

// function show() {
//     console.log(a);
//     let a;
// }
// show()


// how to make post request
// app.post('/api/emp', auth, (req, res, next) => {
//     // constrller->service->repo
// })

// what is buffer class



// calling a call back and reeturning a callback fn

// Returning a callback: In returning a callback, the called function returns a callback instead of executing it immediately. The calling code where the callback is returned can execute the returned callback immediately, pass it to some other function and so on. Lets see an example of a function that returns a callback function.

// const returnCallbackFunction = () => {
//     let i = 10;
//     return () => console.log(
//         'This is a callback function.\nValue of i is', i
//     );
// }
 
// // A callback function is returned by 
// // the returnCallbackFunction()
// let callbackFunction = returnCallbackFunction();
 
// // CallbackFunction is executed
// callbackFunction();


// Calling a callback: In contrast to returning a callback function, calling a callback function is simply the immediate execution of the callback function.


// // Defining a callback function
// const callbackFunction = () => {
//     console.log('Calling a callback function');
// }
 
// // Calling the callback function
// callbackFunction();




