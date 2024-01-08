import contactmodel from "../models/contact-model.js"

const contactcontroller=async(req,res)=>{
    const {name,email,message}=req.body;

    try {
        await contactmodel.create(
            {
                name,email,message
            }
        )
        res.status(201).json({
            status:"success",
            message: 'Contact Created'
            })
    } catch (error) {
        console.log(error);
    }
}

export default contactcontroller;