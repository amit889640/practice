const priorityLog = () => {
    setTimeout(() => console.log("timeout"), 0);
    setImmediate(() => console.log("immediate"));
    console.log("I am independent");
    process.nextTick(() => console.log("nextTick"));
}
priorityLog()

// I am independent
// nextTick
// timeout
// immediate