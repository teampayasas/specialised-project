import app from "./server.js";
import mongodb from "mongodb";
import dotenv from "dotenv"
// must config to load the avriables
dotenv.config()

const MongoClient = mongodb.MongoClient

const port = process.env.PORT 

// CONNECTING TO DATABASE 
MongoClient.connect(
    process.env.BOOKING_DB_URI,
    {
        poolsize: 50,
        useNewUrlParse: true
    }
)
.catch(err =>{
    console.error(err.stack)
    process.exit(1)
})
.then(async client =>{
    app.listen(port, ()=>{
        console.log(`listening on port ${port}`)
    })
})