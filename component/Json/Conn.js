import { error } from "console"

const MONGO_URI="mongodb+srv://shradhdhasagar1502:admin123@cluster0.mzad3bb.mongodb.net/?retryWrites=true&w=majority" 
import mongoose from "mongoose"

const connectMongo=async()=>{
    try{
      const {connection}= await mongoose.connect(MONGO_URI) 

      if(connection.readyState==1){
        console.log("Database Connected")
      }


    }catch(errors){
        return Promise.reject(error)
    }
  
}

export default connectMongo;