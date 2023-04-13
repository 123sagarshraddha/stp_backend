import dbconnect from "../../lib/mongodb";
import Role from '../../module/addrole'

export default async function handler(req, res) {
    const { method } = req;
    dbconnect();
   
    if (method == "GET") {
      try {
          const roles= await  Role.find();
          res.status(201).json(roles)
      } catch (err) {
        res.status(500).json(err);
      }
    }
    if (method == "POST") {
      try {
          const role= await  Role.create(req.body);
          res.status(201).json(role)
      } catch (err) {
        res.status(500).json(err);
      }
    }
    
  }