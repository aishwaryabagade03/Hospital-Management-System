import MedicalrecordsModel from "../Models/MedicalrecordsModel";

export const AddMedicalrecord = async (req,res)=>{
  try {
    const {Patient, Doctor,Diagnonis,Prescription, Labtestresults, TreatmentHistory}=req.body
    const MedicalrecordData = new MedicalrecordsModel({
      Patient:Patient,
      Doctor:Doctor,
      Diagnonis:Diagnonis,
      Prescription:Prescription,
      Labtestresults:Labtestresults,
      TreatmentHistory:TreatmentHistory
    })
    MedicalrecordData .save()
    console.log(MedicalrecordData )
    if(MedicalrecordData ){
      return res.status(201).json({
        data: MedicalrecordData ,
        message: "Successfully Added",
      });
    }
    
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
}

export const AllMedicalrecords = async(req,res)=>{
  try {
    const MedicalrecordData = await MedicalrecordsModel.find();
    if(MedicalrecordData){
      return res.status(200).json({
        data: MedicalrecordData ,
        message: "All Medicalrecords",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
}

export const GetMedicalrecord = async(req,res)=>{
  try {
    const Medicalrecordid = req.params.medicalrecord_id
    const MedicalrecordData = await MedicalrecordsModel.findOne({_id :Medicalrecordid })
    if(MedicalrecordData){
      return res.status(200).json({
        data: MedicalrecordData ,
        message: "Success",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
}

export const UpdateMedicalrecord = async(req,res)=>{
  try {
    const Medicalrecordid = req.params.medicalrecord_id
    const {Patient, Doctor,Diagnonis,Prescription, Labtestresults, TreatmentHistory}=req.body
    const UpdatedData = await MedicalrecordsModel.updateOne({ _id: Medicalrecordid },
      {
        $set:{
          Patient:Patient,
          Doctor:Doctor,
          Diagnonis:Diagnonis,
          Prescription:Prescription,
          Labtestresults:Labtestresults,
          TreatmentHistory:TreatmentHistory
        }
      });
      UpdatedData.save()
      if(UpdatedData.acknowledged){
        return res.status(201).json({
          message: "Updated",
        });
      }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
}

export const DeleteMedicalrecord = async(req,res)=>{
  try {
    const Medicalrecordid = req.params.medicalrecord_id
    const DeletedData = await MedicalrecordsModel.deleteOne({_id: Medicalrecordid})
    if(DeletedData.acknowledged){
      return res.status(200).json({
        message: "Medicalrecord Deleted",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
}