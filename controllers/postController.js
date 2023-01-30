import Note from "../models/post.js"

class PostController {

    getNotes = async (req, res) => {
        const notes = await Note.find()
        res.json({ notes })
    }

    getNoteById = async (req, res) => {
        const { id } = req.params
        const note = await Note.findById(id)
        res.json({ note })
    }

    addNote = async (req, res) => {
        const { title, body } = req.body
        const note = await Note.create({
            title,
            body
        })
        res.json({ note })
    }


    editNote = async (req, res) => {

        const { id } = req.params
        const { title, body } = req.body
        await Note.findByIdAndUpdate(id, { title, body })
        const note = await Note.findById(id)
        res.json({ note })


    }


    deleteNote = async (req, res) => {
        const { id } = req.params
        const note = await Note.deleteOne({ id })
        res.json({ Success: true, note })

    }

}


export default new PostController()