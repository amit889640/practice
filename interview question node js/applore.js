db.collectName.aggregate([
    {
        $lookup: {
            from: 'db',
            localField: '',
            foreignField: '',
            as: ''
        }
    }
])


// import and require
// import Login from './login';
// const express =require('express')
// require:- can be called at any time and place in the program.

// import:- It can’t be called conditionally, it always run in the beginning of the file
// ES module?
// ES6 feature
// middleware:is a function that will have all the access for requesting an object, responding to an object, and moving to the next middleware function in the application request-response cycle.




// /*

// Requirement
// Real state

// agency 
// keep track of 
// portfolio()
// clients
// Propects(potential customer) 5000 (property)


// functions
// crud and promotional email

// Entities

// Agency_Detail

// Portfolio -> clients

// Notifications


// Microservice
// 1. Gateway (authentication, and auth)
//     -authentication()
//     -orchestrate to ms

// 2. Agency ->
//     -saveDetail()
//     -updateDetail()

// 3. Portfolio -> 
//     -saveClientDetail(name,address[], pan,adhaarCard, certificationUrl[]) 

//     -savePropertiesDetail(address,area,govtCertificates,lastOwner,currentOwner)
//         ->if(anyNewPorfolio)->sendNotification to Notification by RabbitMQ
//         ->indexing for address,area

//     -getPortfolio(filter:{address,area,owner})
//         ->redis for the frequently access portfolio.


// 4. Notification -> 
//     -Cron job for autoGenerateNotification()
//     -emailSend(detail[])

//     -listener(email,detailOfProperties) (RabbitMq receive)
//     -handler
//     -controller
//     -service
// */


function newPromise() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('Promise is resolved in 10 sec')
        }, 10000)
    })
}

async function callPromise() {
    console.log(await newPromise());
}

callPromise()



function createSlot(start, end, interval) {
    const slot = [];
    slot.push(start)
    let i = 0
    while (true) {
        let s = addInterval(start, interval);
        console.log(s);
        slot.push(s);
        i++
        start = s;
        if ((start.split(':')[0] == end.split(':')[0])) {
            break;
        }
    }
    return slot;
}

function addInterval(time, interval) {
    let [h, m] = time.split(':')
    let newM = +m + interval
    if (newM >= 60) {
        h = +h + 1;
        m = newM - 60;
    } else {
        m = newM;
    }
    h = String(h);
    m = String(m);
    if (h.length == 1) {
        h = '0' + String(h)
    }
    if (m.length == 1) {
        m = '0' + String(m)
    }
    return `${h}:${m}`
}
console.log(createSlot('08:00', '14:00', 30));