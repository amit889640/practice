import express from 'express';
const app = express();


app.get('/', (req,res) => {
    res.status(200).send("Hello world");
})

app.listen(4202, () => {
    console.log(`App is running on port 4201`);
})
