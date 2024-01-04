import express  from "express"
import getdata from "../controllers/logindata.js";
const Router3 = express.Router();
Router3.route("/logindata")
.get(getdata)
export default Router3;