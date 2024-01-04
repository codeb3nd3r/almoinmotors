import authmodel from "../models/auth-model.js";

const getdata=async(req,res)=>{
    //get data from the database
    let userData = await authmodel.find();
    res.status(200).send(userData)
    }

export default getdata;