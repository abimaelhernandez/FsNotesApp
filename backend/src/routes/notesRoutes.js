import express from "express"
import { 
  getAllNotes,
  createNote, 
  updateNote, 
  deleteNote,
  getSingleNote
 } from "../controllers/notesController.js"

const router = express.Router()

// endpount is a combo of url and http method to interacr with resource
router.get("/", getAllNotes)

router.post("/", createNote)

router.put("/:id", updateNote)

router.delete("/:id", deleteNote)

router.get("/:id", getSingleNote)

export default router