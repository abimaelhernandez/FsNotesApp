import express from "express"
import dotenv from "dotenv"
import cors from "cors"
// const express = require("express")
import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js"
import rateLimiter from "./middleware/rateLimiter.js"

dotenv.config()

const app = express()
const port = process.env.PORT || 5001

// middleware
 app.use(express.json()) // this middlwe ware parse the json body

// simple custom middleware 
// app.use((req, res, next) => {
//   console.log(`Req mthod is ${req.method} & Req   URL ius ${req.url}`)  
//   next()
// })

app.use(cors())
app.use(rateLimiter)
app.use("/api/notes", notesRoutes)


connectDB().then(()=> {
  app.listen(port, () => {
    console.log(`server up and runing on port ${port}`)
  })
})