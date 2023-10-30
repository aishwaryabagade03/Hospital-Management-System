import mongoose from "mongoose";
const Schema = mongoose.Schema;

const DoctorSchema = new Schema({
  Name: {
    type: String,
    required: true,
  },
  Specialization: {
    type: String,
    required: true,
  },
  Phone: {
    type: Number,
    required: true,
  },
  Availability:{
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export default mongoose.model("Doctor", DoctorSchema);
