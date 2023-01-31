import express from 'express'
import * as dotenv from 'dotenv'
import connectToDb from './config/connectToDb.js';
import router from './routes/postRouter.js';
import cors from 'cors'


if(process.env.NODE_ENV !="production"){
    dotenv.config();
}

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', router)

connectToDb()

app.get('/', (req, res)=>{
        res.send("This is CRUD API")    
})


app.listen(process.env.PORT, ()=>{
    console.log("Server has been started...")
})