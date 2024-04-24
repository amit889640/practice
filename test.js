
// process.on('uncaugthException', (error) => {
//     console.error(error)
// })

// app.use((error, next, req, res) => {
//     res.status(error.status).send(error.message)
// })


// app.send('/api/emp/:id', globatErrorHandler((req, res, next) => {
//     // controller.getEmployee(req.body.id)
// }))

// const globatErrorHandler = (fun) => {
//     return (req, res, next) => {
//         fun(req, res, next).catch((err => {
//             next(err)
//         }))
//     }
// }



const express = require('clustger');


if (cluster.isMaster) {
    cluster.fork();
} else {

}