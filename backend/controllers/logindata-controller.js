const logindata=async(req,res)=>{
    try {
        res.status(202).send({msg:"hello world"})
    } catch (error) {
        console.log(error);
    }
}

export default logindata;