// imports
import express from "express"
import cors from "cors"
import bookings from "./api/booking.route.js"

const app = express()
    app.use(cors())
    app.use(express.json())
    app.use("/api/v1/booking")
    app.use("*", (req,res)=>res.status(404).json({error:"not found"}))

    // export app as a module
    export default app