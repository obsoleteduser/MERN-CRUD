import express from 'express'
import PostController from '../controllers/postController.js'


const router = express.Router()

router.get('/notes', PostController.getNotes)

router.get('/notes/:id', PostController.getNoteById)

router.post('/notes', PostController.addNote)

router.put('/notes/:id', PostController.editNote)

router.delete('/notes/:id', PostController.deleteNote)


export default router