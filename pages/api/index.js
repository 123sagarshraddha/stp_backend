import connectMongo from "../../component/Json/Conn";

export default async function handler (req,res){
    connectMongo().catch(()=>res.status(405).json({error:"error in the connection"}))

    const {method}=req
      
    switch(method){
        case 'GET':
            res.status(200).json({method,name:'Get REQuest'});
        break;
        case 'POST':
            res.status(200).json({method,name:"Post Request"});

        break;
        case 'PUT':
            res.status(200).json({method,name:"PUT Request"});

        break;
        case 'DELETE':
            res.status(200).json({method,name:"DELETE Request"});

        break;

        default:
            res.setHeader('ALLOW',['GET','POST','PUT','DELETE']);
            res.status(405).end('Method $(method)Not Allowd')
        
    }
}