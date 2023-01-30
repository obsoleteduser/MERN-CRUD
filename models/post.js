import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    title: String,
    body: String
})

const Post = mongoose.model('Post', noteSchema)

export default Post