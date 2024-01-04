import mongoose from "mongoose";

const authSchema = new mongoose.Schema(
  {
    email: { type: String},
    password: { type: String}
  },
  { collection: "log-in" }
);
const authmodel = mongoose.model("Login", authSchema);
export default authmodel;
