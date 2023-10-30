import mongoose from "mongoose";
const Schema = mongoose.Schema;

const NurseSchema = new Schema({
  Name: {
    type: String,
    required: true,
  },
  Gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
    required: true,
  },
  DOB: {
    type: Date,
    required: true,
  },
  Contact: {
    type: Number,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  Qualification: {
    type: String,
    required: true,
  },
  Department: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
})

export default mongoose.model("Nurse", NurseSchema)