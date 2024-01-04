import authmodel from "../models/auth-model.js";
import * as bcrypt from "bcrypt";

const saltrrounds=10;

const registration=async(req,res)=>{
    const {email,password}=req.body;
    const hashpassword=await bcrypt.hash(password,saltrrounds);
    console.log({email,password:hashpassword});
// password encryption using bycrypt 
    try {
        await authmodel.create({
            email,password:hashpassword
        })
        res.status(201).send("created")
    } catch (error) {
        console.log(error);
    }
}
export default registration;