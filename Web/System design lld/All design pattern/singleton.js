/*
It is creational pattern which have one object
It is basically used in process manager
*/

class ProcessManager {
    constructor() {
        this.processManager;
    }

    static getManager() {
        if (!this.processManager) {
            this.processManager = new ProcessManager();
        }
        return this.processManager;
    }
}

const p1 = ProcessManager.getManager()
const p2 = ProcessManager.getManager()

// hence we have created only object through-out the process
console.log(p1 == p2);