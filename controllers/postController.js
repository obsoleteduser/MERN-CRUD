import Post from "../models/post.js"

class PostController {

    getNotes = async (req, res) => {
        const posts = await Post.find()
        res.json({ posts })
    }

    getNoteById = async (req, res) => {
        const { id } = req.params
        const post = await Post.findById(id)
        res.json({ post })
    }

    addNote = async (req, res) => {
        const { title, body } = req.body
        const post = await Post.create({
            title,
            body
        })
        res.json({ post })
    }


    editNote = async (req, res) => {

        const { id } = req.params
        const { title, body } = req.body
        await Post.findByIdAndUpdate(id, { title, body })
        const post = await Post.findById(id)
        res.json({ post })


    }


    deleteNote = async (req, res) => {
        const { id } = req.params
        const post = await Post.deleteOne({ id })
        res.json({ Success: true, post })

    }

}


export default new PostController()