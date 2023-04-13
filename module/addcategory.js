import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
 
    category_name: {
        type: String,
      },

});

export default mongoose.models.Category || mongoose.model("Category" , CategorySchema);