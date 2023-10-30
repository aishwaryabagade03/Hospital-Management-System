import mongoose from "mongoose";
const Schema = mongoose.Schema;

const MedicalrecordsSchema =new Schema ({
Patient:{
  type: Schema.Types.ObjectId,
  required:true,
},
Doctor:{
  type: Schema.Types.ObjectId,
  required:true, 
},
Diagnonis:{
  type:String,
  required:true, 
},
Prescription:{
  type:String,
  required:true,
},
Labtestresults:{
  type:String,
  required:true,
},
TreatmentHistory:{
  type:String,
  required:true,
},
createdAt: {
  type: Date,
  default: Date.now(),
}
})

export default mongoose.model("Medicalrecords",MedicalrecordsSchema)