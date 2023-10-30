import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  Email:{
    type: String,
    required: true,
  },
  Password:{
    type: String,
    required: true,
  },
  role:{
    type: String,
    enum:["admin", "doctor", "nurse", "receptionist"],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
})


export default mongoose.model("User", UserSchema)