const express = require('express')
const app = express()

app.get('/', (req,res)=> {
    res.send('This is the home page')
})


const port = 3000;

const start = () => {
    try {
        app.listen(port, ()=> {
            console.log(`Server is listening on port ${port}...`);
        })
    } catch (error) {
        console.log(`Server startup error is... ${error}`);
    }
}

start()