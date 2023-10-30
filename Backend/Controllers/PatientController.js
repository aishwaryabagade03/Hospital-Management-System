import PatientModel from "../Models/PatientModel";

export const AddPatient = async (req, res) => {
  try {
    const {
      Name,
      Email,
      Address,
      PhoneNumber,
      Sex,
      DOB,
      Age,
      BloodGroup,
      TimeofRegistration,
    } = req.body;
    const PatientData = new PatientModel({
      Name: Name,
      Email: Email,
      Address: Address,
      PhoneNumber: PhoneNumber,
      Sex: Sex,
      DOB: DOB,
      Age: Age,
      BloodGroup: BloodGroup,
      TimeofRegistration: TimeofRegistration,
    });
    PatientData.save();
    console.log(PatientData);
    if (PatientData) {
      return res.status(201).json({
        data: PatientData,
        message: "Successfully Added",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const AllPatients = async (req, res) => {
  try {
    const PatientData = await PatientModel.find();
    if (PatientData) {
      return res.status(200).json({
        data: PatientData,
        message: "Successfully Added",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const GetPatient = async (req, res) => {
  try {
    const Patientid = req.params.Patient_id;
    const PatientData = await PatientModel.findOne({ _id: Patientid });
    if (PatientData) {
      return res.status(200).json({
        data: PatientData,
        message: "Success",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const UpdatePatient = async (req, res) => {
  try {
    const Patientid = req.params.Patient_id;
    const {
      Name,
      Email,
      Address,
      PhoneNumber,
      Sex,
      DOB,
      Age,
      BloodGroup,
      TimeofRegistration,
    } = req.body;
    const UpdatedData = await PatientModel.updateOne(
      { _id: Patientid },
      {
        $set: {
          Name: Name,
          Email: Email,
          Address: Address,
          PhoneNumber: PhoneNumber,
          Sex: Sex,
          DOB: DOB,
          Age: Age,
          BloodGroup: BloodGroup,
          TimeofRegistration: TimeofRegistration,
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

export const DeletePatient = async (req, res) => {
  try {
    const Patientid = req.params.Patient_id;
    const DeletedData = await PatientModel.deleteOne({ _id: Patientid });
    if (DeletedData.acknowledged) {
      return res.status(200).json({
        message: "Patientdata Deleted",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
