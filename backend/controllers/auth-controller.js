import authmodel from "../models/auth-model.js";
import * as bcrypt from "bcrypt";

const saltrrounds = 10;

const registration = async (req, res) => {
    const { fname, lname, email, password } = req.body;
    
    try {
        // Check if the email already exists in the database
        const existingUser = await authmodel.findOne({ email: email });
        if (existingUser) {
            // If a user with that email already exists, send an error response
            return res.status(409).send("Email already in use");
        }
        
        // If the email does not exist, hash the password
        const hashpassword = await bcrypt.hash(password, saltrrounds);
        console.log({ email, password: hashpassword });
        
        // Create the user in the database
        await authmodel.create({
            fname,
            lname,
            email,
            password: hashpassword
        });
        
        // Send success response
        res.status(201).send("User created successfully");
    } catch (error) {
        console.error(error);
        // Send a generic error response
        res.status(500).send("An error occurred during registration");
    }
};

export default registration;
