import mongoose from "mongoose";

const contactSchema=new mongoose.Schema(
    {
        name:{type:String,required:true},
        email:{type:String,required:true},
        message:{type:String,required:true},

    },
    {
        collection:"contact"
    }
)
const contactmodel=mongoose.model("Contact",contactSchema)
export default contactmodel;