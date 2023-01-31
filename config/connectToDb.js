import mongoose from "mongoose"
import * as dotenv from 'dotenv'
dotenv.config()
mongoose.set('strictQuery', true)

const connectToDb = async ()=>{
    try{
     await mongoose.connect(process.env.DB_URL)
    }catch(error){
        console.log(error)
    }

}

export default connectToDB