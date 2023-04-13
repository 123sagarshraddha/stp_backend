import mongoose from "mongoose";

const RoleSchema = new mongoose.Schema({
 
    addrole: {
        type: String,
      },

});

export default mongoose.models.Role || mongoose.model("Role" , RoleSchema);