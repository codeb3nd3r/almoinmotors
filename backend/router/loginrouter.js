import express  from "express"
import registration from "../controllers/auth-controller.js";
const Router = express.Router();

Router.route("/login")
.post(registration)
export default Router;