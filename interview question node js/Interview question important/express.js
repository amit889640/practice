/*
Best practices in express()

-Gzip compressing can greatly decrease the size of the response body and hence increase the speed of a web app
const compression = require('compression')
app.use(compression())

-Don’t use synchronous functions
A single call to a synchronous function might return in a few microseconds or milliseconds, however in high-traffic websites, these calls add up and reduce the performance of the app

-Do logging correctly

-Handle exceptions properly
Use try-catch
Use promises
*/