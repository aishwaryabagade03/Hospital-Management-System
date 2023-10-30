import mongoose from "mongoose";
const Schema = mongoose.Schema;

const PatientSchema = new Schema({
  Name: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  Address:{
    type: String,
    required: true,
  },
  PhoneNumber: {
    type: Number,
    required: true,
  },
  Sex:{
    type: String,
    required: true,
  },
  DOB:{
    type: Date,
    required: true,
  },
  Age:{
    type: Number,
    required: true,
  },
  BloodGroup:{
    type: String,
    required: true,
  },
  TimeofRegistration:{
    type: Date,
    default: Date.now(),
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
})

export default mongoose.model("Patient", PatientSchema)