import connectMongo from "../../component/Json/Conn"


export default function handler(req,res){
    connectMongo
    res.status(200).json({name:'Jhon Doe'})
}