import mongoose from "mongoose";
const Schema = mongoose.Schema;

const AppointmentSchema = new Schema({
  Patient:{
    type: String,
    required:true,
  },
  Doctor:{
    type: String,
    required:true,
  },
  AppointmentDate:{
    type:Date,
    required:true,
  },
  Status: {
    type: String,
    enum: ['Scheduled', 'Completed', 'Cancelled'],
    default: 'Scheduled', // Optional, you can set a default value
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
})

export default mongoose.model("Appointment", AppointmentSchema)