import BedAllotmentModel from "../Models/BedAllotmentModel";

export const AddBedAllotment = async (req, res) => {
  try {
    const {
      Patient,
      PatientStatus,
      BedType,
      BedNumber,
      AllotmentDate,
      DischargeDate,
    } = req.body;
    const BedAllotmentData = new BedAllotmentModel({
      Patient: Patient,
      PatientStatus: PatientStatus,
      BedType: BedType,
      BedNumber: BedNumber,
      AllotmentDate: AllotmentDate,
      DischargeDate: DischargeDate,
    });
    BedAllotmentData.save();
    console.log(BedAllotmentData);
    if (BedAllotmentData) {
      return res.status(201).json({
        data: BedAllotmentData,
        message: "Successfully Added",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const AllBedAllotments = async (req, res) => {
  try {
    const BedAllotmentData = await BedAllotmentModel.find();
    if (BedAllotmentData) {
      return res.status(200).json({
        data: BedAllotmentData,
        message: "All Bed Allotments",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const GetBedAllotment = async (req, res) => {
  try {
    const Bedallotmentid = req.params.bedallotment_id;
    const BedAllotmentData = await BedAllotmentModel.findOne({
      _id: Bedallotmentid,
    });
    if (BedAllotmentData) {
      return res.status(200).json({
        data: BedAllotmentData,
        message: "Success",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const UpdateBedAllotment = async (req, res) => {
  try {
    const Bedallotmentid = req.params.bedallotment_id;
    const {  Patient,
      PatientStatus,
      BedType,
      BedNumber,
      AllotmentDate,
      DischargeDate,  } = req.body;
    const UpdatedData = await BedAllotmentModel.updateOne(
      { _id: Bedallotmentid },
      {
        $set: {
          Patient: Patient,
          PatientStatus: PatientStatus,
          BedType: BedType,
          BedNumber: BedNumber,
          AllotmentDate: AllotmentDate,
          DischargeDate: DischargeDate,
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

export const DeleteBedAllotment = async (req, res) => {
  try {
    const Bedallotmentid = req.params.bedallotment_id;
    const DeletedData = await BedAllotmentModel.deleteOne({ _id: Bedallotmentid });
    if (DeletedData.acknowledged) {
      return res.status(200).json({
        message: "BedAllotment Deleted",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
