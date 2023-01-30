import express from 'express'
import * as dotenv from 'dotenv'
import connectToDB from './config/connectToDB.js';
import router from './routes/noteRouter.js';

if(process.env.NODE_ENV !="production"){
    dotenv.config();
}

const app = express()

app.use(express.json())
app.use('/api', router)

connectToDB()

app.get('/', (req, res)=>{
        res.send("This is CRUD API")    
})


app.listen(process.env.PORT, ()=>{
    console.log("Server has been started...")
})