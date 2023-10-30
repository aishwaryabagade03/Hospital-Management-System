import mongoose from "mongoose";
import PatientModel from "./PatientModel";
import DoctorModel from "./DoctorModel";
const Schema = mongoose.Schema;

const InvoiceSchema = new Schema({
  Patientid:{
    type: Schema.Types.ObjectId,
    ref:PatientModel,
    required: true,
  },
  Doctorid:{
    type: Schema.Types.ObjectId,
    ref:DoctorModel,
    required:true, 
  },
  Purposeofpayment: {
    type: String,
    required: true,
  },
  Modeofpayment: {
    type: String,
    required: true,
  },
  Amount: {
    type: Number,
    required: true,
  },
  Paid:{
    type: String,
    required: true,
  },
  InvoiceDate: {
    type: Date,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export default mongoose.model("Invoice", InvoiceSchema);
