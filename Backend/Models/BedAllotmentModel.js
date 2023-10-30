import mongoose from "mongoose";
const Schema = mongoose.Schema;


const BedAllotmentSchema = new Schema({
  Patient:{
    type: String,
    required:true,    
  },
  PatientStatus:{
    type:String,
    required:true,
  },
  BedType:{
    type:String,
    required:true,
  },
  BedNumber:{
    type:Number,
    required:true,
  },
  AllotmentDate:{
    type:Date,
    required:true,
  },
  DischargeDate:{
    type:Date,
    required:true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  }
})

export default mongoose.model("BedAllotment", BedAllotmentSchema)