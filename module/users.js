import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema({
  first_name: {
    type: String,
  },
  last_name: {
    type: String,
   
  },
  email: {
    type: String,
    required:true
  },
  password: {
    type: String,
  },
  status: {
    type: String,
   
  },
  role: {
    type: String,
  },


}, {timestamps:true});

export default mongoose.models.Users || mongoose.model("Users" , UsersSchema);