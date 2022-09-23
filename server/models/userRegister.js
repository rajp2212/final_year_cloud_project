import mongoose from "mongoose";

const userSchema=mongoose.Schema({
    name:{type: String, required: true},
    email:{type: String, required: true, index: { unique: true }},
    password:{type: String, required: true},
    id:{type: String},
    
});

var UserRegister=mongoose.model("UserRegister",userSchema);
export default UserRegister;