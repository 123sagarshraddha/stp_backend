import dbconnect from "../../lib/mongodb";
import Users from '../../module/users'

export default async function handler(req, res) {
  const { method } = req;
  dbconnect();
 
  if (method == "POST") {
    try {
        const user= await  Users.findOne({ email: req.body.email });
        !user && res.status(400).json({
            status: 'Wrong Password And Username'
        });
        const userpass= await  Users.findOne({ password: req.body.password });
        !userpass && res.status(400).json({
            status: 'Wrong Password And Username'
        });
        res.status(201).json(user)
    } catch (err) {
      res.status(500).json(err);
    }
  }
  
}

