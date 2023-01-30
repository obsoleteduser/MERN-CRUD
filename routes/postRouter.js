import express from 'express'
import PostController from '../controllers/postController.js'


const router = express.Router()

router.get('/posts', PostController.getNotes)

router.get('/posts/:id', PostController.getNoteById)

router.post('/posts', PostController.addNote)

router.put('/posts/:id', PostController.editNote)

router.delete('/posts/:id', PostController.deleteNote)


export default router