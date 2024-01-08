import  express  from "express";
import cors from "cors";
import connectdb from "./utils/db.js";
import Router from "./router/loginrouter.js";
import router2 from "./router/loginrouterdata.js";
import Router3 from "./router/logindata.js";
import router4 from "./router/contactrouter.js"
const port=5000;
const app=express();

app.use(cors({
    origin: "*",
    method: "*",
}))
app.use(express.json());


app.use("/almoin",Router)
app.use("/almoin",router2)
app.use("/almoin",Router3)
app.use("/almoin",router4)




const startServer=async()=>{
    try {
        await connectdb()
        .then(()=>{
            console.log('Database Connected')
        })
        app.listen(port, () => console.log(`Server running on port ${port}`));
    } catch (error) {
        console.log(error);
    }
}


startServer();