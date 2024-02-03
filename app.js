require('dotenv').config()
const express = require('express')
const connectDB = require('./server/db/connect')
const userRouter = require('./server/routes/userRoutes')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())
app.use('/api/v1/shoestore', userRouter)

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