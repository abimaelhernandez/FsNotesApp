import express from "express"
import dotenv from "dotenv"
import cors from "cors"
// const express = require("express")
import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js"
import rateLimiter from "./middleware/rateLimiter.js"
import path from 'path'

dotenv.config()

const app = express()
const port = process.env.PORT || 5001
const __dirname = path.resolve()
// middleware
app.use(express.json()) // this middlwe ware parse the json body

// simple custom middleware 
// app.use((req, res, next) => {
//   console.log(`Req mthod is ${req.method} & Req   URL ius ${req.url}`)  
//   next()
// })

if(process.env.NODE_ENV !== "production" ) {
  app.use(cors())
}

app.use(rateLimiter)
app.use("/api/notes", notesRoutes)

if(process.env.NODE_ENV === "production" ) {
  app.use(express.static(path.join(__dirname, "../frontend/dist")))
  
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"))
  })
}


connectDB().then(()=> {
  app.listen(port, () => {
    console.log(`server up and runing on port ${port}`)
  })
})