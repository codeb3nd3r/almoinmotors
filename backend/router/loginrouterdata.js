import  Express  from "express";
import logindata from "../controllers/logindata-controller.js"
const router2=Express.Router();
router2.route("/getdata").get(logindata);
export default router2;