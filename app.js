require('dotenv').config()
const express = require('express')
const connectDB = require('./server/db/connect')
const app = express()

app.get('/', (req,res)=> {
    res.send('This is the home page')
})


const port = process.env.PORT;
const url = process.env.MONGO_URI

const start = async () => {
    try {
        await connectDB(url)
        app.listen(port, ()=> {
            console.log(`Server is listening on port ${port}...`);
        })
    } catch (error) {
        console.log(`Server startup error is... ${error}`);
    }
}

start()