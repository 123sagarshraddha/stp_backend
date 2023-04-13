import dbconnect from "../../lib/mongodb";
import Users from '../../module/users'


export default async function handler(req, res) {
  const { method } = req;
  dbconnect();
 
  if (method == "GET") {
    try {
        const alluser= await  Users.find();
        res.status(201).json(alluser)
    } catch (err) {
      res.status(500).json(err);
    }
  }
  if (method == "POST") {
    try {
        const newuser= await  Users.create(req.body)
        res.status(201).json(newuser)
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

