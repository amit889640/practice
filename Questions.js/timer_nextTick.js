setImmediate(() => {
	console.log("setImmediate");
});

setTimeout(() => {
	console.log("setTimeout");
});

process.nextTick(() => {
	console.log("process.nextTick 1");
});

process.nextTick(() => {
	console.log("process.nextTick 2");
});

// because nexttick enter the queue before the event loop execution so it will be the first one.
