import express from 'express'
import noteController from '../controllers/noteController.js'

const router = express.Router()

router.get('/notes', noteController.getNotes)

router.get('/notes/:id', noteController.getNoteById)

router.post('/notes', noteController.addNote)

router.put('/notes/:id', noteController.editNote)

router.delete('/notes/:id', noteController.deleteNote)


export default router