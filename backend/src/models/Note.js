import mongoose from "mongoose";

/**
 * schema 
 * model based off esquema
*/

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
}, {timestamps: true}) //creaetd and updated at 

export const Note = mongoose.model('Note', noteSchema)

