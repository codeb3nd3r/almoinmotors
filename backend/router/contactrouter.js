import express from "express";
import contactcontroller from "../controllers/contact-controller.js";
const router4=express.Router();
router4.route("/contact").post(contactcontroller);
export default router4;