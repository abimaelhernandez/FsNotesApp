import mongoose from "mongoose"

export const connectDB =  async ()=> {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log('Mongo DB connected :!')
  } catch (error) {
    console.log('Error connecting to Mongo DB', error)
    process.exit(1) //exit with errror
  }
}