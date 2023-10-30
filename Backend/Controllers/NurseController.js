import NurseModel from "../Models/NurseModel";

export const AddNurse = async (req, res) => {
  try {
    const { Name, Gender,DOB,Contact,Email,Qualification, Department } = req.body;
    const NurseData = new NurseModel({
      Name: Name,
      Gender:Gender,
      DOB:DOB,
      Contact:Contact,
      Email: Email,
      Qualification:Qualification,
      Department: Department,
    });
    NurseData.save();
    console.log(NurseData);
    if (NurseData) {
      return res.status(201).json({
        data:  NurseData ,
        message: "Successfully Added",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};


export const AllNurse = async (req, res) => {
  try {
    const NurseData = await NurseModel.find();
    if (NurseData) {
      return res.status(200).json({
        data:  NurseData ,
        message: "Successfully Added",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const GetNurse = async (req, res) => {
  try {
    const Nurseid = req.params.nurse_id;
    const NurseData = await NurseModel.findOne({ _id: Nurseid});
    if ( NurseData ) {
      return res.status(200).json({
        data:  NurseData ,
        message: "Success",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const UpdateNurse = async (req, res) => {
  try {
    const Nurseid  = req.params.nurse_id;
    const { Name, Gender,DOB,Contact,Email,Qualification, Department } = req.body;
    const UpdatedData = await NurseModel.updateOne(
      { _id: Nurseid  },
      {
        $set: {
          Name: Name,
          Gender:Gender,
          DOB:DOB,
          Contact:Contact,
          Email: Email,
          Qualification:Qualification,
          Department: Department,
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

export const DeleteNurse = async (req, res) => {
  try {
    const Nurseid = req.params.nurse_id;
    const DeletedData = await NurseModel.deleteOne({ _id: Nurseid });
    if (DeletedData.acknowledged) {
      return res.status(200).json({
        message:  "Deleted",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
