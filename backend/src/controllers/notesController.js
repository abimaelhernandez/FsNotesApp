import { Note } from '../models/Note.js'

export const getAllNotes = async (req, res)=> {
  try {
    const notes = await Note.find().sort({ createdAt: -1 })
    res.status(200).json(notes)
  } catch (error) {
    console.log('errror in the controller getting all notes', error)
    res.status(500).json({message: 'internal server error'})    
  }
}

export const createNote = async (req, res) => {
  try {
    const {title, content} = req.body
    console.log('WHEN creating new', req.body)
    const note = new Note({ title, content})

    const savedNote = await note.save()
  
    res.status(201).json(savedNote)
  } catch (error) {
    console.log("Error creating note", error)
    res.status(500).json({
      message: "Internal server error while creating note"
    })
  }
}

export const updateNote = async (req, res) => {
  try {
    const { title, content } = req.body;

    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true, runValidators: true } // Return the updated document and validate input
    );

    if (!updatedNote) {
      return res.status(404).json({ message: 'Note not found' });
    }

    console.log('UPDATED NOTE', updatedNote);
    res.status(200).json({ message: 'Note updated successfully', updatedNote });
  } catch (error) {
    console.log('Update internal server error', error);
    res.status(500).json({
      message: 'Internal server error when updating',
    });
  }
}


export const deleteNote = async (req, res) => {
  try {
   const deletedNote = await Note.findByIdAndDelete(req.params.id)
   if(!deleteNote) return res.status(404).json({message: 'Note not found'})
    res.status(200).json({message: 'Note deleted succesfully'})
  } catch (error) {
   console.log('Error deleting notes', error) 
   res.status(500).json({
    message: 'Error deleting notes server error'
   })
  }
}

export const getSingleNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id)
    if(!note) return res.status(404).json({message: 'Note not found'})
    // console.log('felcidades obtaine', note)
    res.status(200).json({message: 'Succesfully obtained single note', note})  
  } catch (error) {
    console.log('Internal server error', error)   
  }
}