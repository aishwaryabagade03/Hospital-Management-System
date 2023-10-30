import InvoiceModel from "../Models/InvoiceModel";

export const AddInvoice = async(req,res)=>{
  try {
    const {Patientid,Doctorid, Purposeofpayment, Modeofpayment,Amount,Paid,InvoiceDate }=req.body
    const InvoiceData = new InvoiceModel({
      Patientid:Patientid,
      Doctorid: Doctorid,
      Purposeofpayment:Purposeofpayment,
      Modeofpayment:Modeofpayment,
      Amount:Amount,
      Paid: Paid,
      InvoiceDate: InvoiceDate,
    })
    InvoiceData.save()
    if(InvoiceData){
      return res.status(201).json({
        data: InvoiceData ,
        message: "Successfully Added",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
}

export const AllInvoice = async (req,res)=>{
  try {
    const InvoiceData = await InvoiceModel.find()
    if(InvoiceData){
      return res.status(200).json({
        data: InvoiceData ,
        message: "All Invoice",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
}

export const GetInvoice = async(req,res)=>{
  try {
    const Invoiceid = req.params.Invoice_id
    const InvoiceData = await InvoiceModel.findOne({_id: Invoiceid})
    if(InvoiceData){
      return res.status(200).json({
        data: InvoiceData ,
        message: "Success",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
}

export const UpdateInvoice = async(req,res)=>{
  try {
    const {Patientid,Doctorid, Purposeofpayment, Modeofpayment,Amount,Paid,InvoiceDate }=req.body
    const Invoiceid = req.params.Invoice_id
    const UpdatedData = await InvoiceModel.updateOne({_id: Invoiceid},
      {
        $set:{
          Patientid:Patientid,
          Doctorid: Doctorid,
          Purposeofpayment:Purposeofpayment,
          Modeofpayment:Modeofpayment,
          Amount:Amount,
          Paid: Paid,
          InvoiceDate: InvoiceDate,
        }
      })
      UpdatedData.save()
      console.log(UpdatedData)
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

export const DeleteInvoice = async (req,res)=>{
  try {
    const Invoiceid = req.params.Invoice_id
    const DeletedData = await InvoiceModel.deleteOne({_id: Invoiceid})
    if(DeletedData.acknowledged){
      return res.status(200).json({
        message: "Invoice Deleted",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
}