import DoctorModel from "../Models/DoctorModel";

export const AddDoctor =  (req, res) => {
  try {
    const { Name,Specialization, Phone,Availability } = req.body;
    const DoctorData = new DoctorModel({
      Name: Name,
      Specialization:Specialization,
      Phone: Phone,
      Availability:Availability,
    });
    DoctorData.save();
    console.log(DoctorData);
    if (DoctorData) {
      return res.status(201).json({
        data: DoctorData,
        success:true,
        message: "Successfully Added",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const AllDoctors = async (req, res) => {
  try {
    const DoctorData = await DoctorModel.find();
    if (DoctorData) {
      return res.status(200).json({
        data: DoctorData,
        message: "Successfully Added",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const GetDoctor = async (req, res) => {
  try {
    const Doctorid = req.params.doctor_id;
    const DoctorData = await DoctorModel.findOne({ _id: Doctorid });
    if (DoctorData) {
      return res.status(200).json({
        data: DoctorData,
        message: "Success",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const UpdateDoctor = async (req, res) => {
  try {
    const Doctorid  = req.params.doctor_id;
    const { Name,Specialization, Phone,Availability  } = req.body;
    const UpdatedData = await DoctorModel.updateOne(
      { _id: Doctorid  },
      {
        $set: {
          Name: Name,
          Specialization:Specialization,
          Phone: Phone,
          Availability:Availability,
        },
      }
    );
    if (UpdatedData.acknowledged) {
      return res.status(201).json({
        message: "Updated",
      });
    }
    console.log(UpdatedData);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const DeleteDoctor = async (req, res) => {
  try {
    const Doctorid = req.params.doctor_id;
    const DeletedData = await DoctorModel.deleteOne({ _id: Doctorid });
    if (DeletedData.acknowledged) {
      return res.status(200).json({
        message: "Department Deleted",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
