import dbconnect from "../../lib/mongodb";
import Category from '../../module/addcategory'

export default async function handler(req, res) {
    const { method } = req;
    dbconnect();
   
    if (method == "GET") {
      try {
          const Categorys= await  Category.find();
          res.status(201).json(Categorys)
      } catch (err) {
        res.status(500).json(err);
      }
    }
    if (method == "POST") {
      try {
          const category= await  Category.create(req.body);
          res.status(201).json(category)
      } catch (err) {
        res.status(500).json(err);
      }
    }
    
  }