import AppointmentModel from "../Models/AppointmentModel";

export const AddAppointment = async (req, res) => {
  try {
    const { Patient, Doctor, AppointmentDate, Status } = req.body;
    const AppointmentData = new AppointmentModel({
      Patient: Patient,
      Doctor: Doctor,
      AppointmentDate: AppointmentDate,
      Status: Status,
    });
    AppointmentData.save();
    console.log(AppointmentData);
    if (AppointmentData) {
      return res.status(201).json({
        data: AppointmentData,
        message: "Successfully Added",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const AllAppointments = async (req, res) => {
  try {
    const AppointmentData = await AppointmentModel.find();
    if (AppointmentData) {
      return res.status(200).json({
        data: AppointmentData,
        message: "All Appointments",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const GetAppointment = async (req, res) => {
  try {
    const Appointmentid = req.params.appointment_id;
    const AppointmentData = await AppointmentModel.findOne({ _id: Appointmentid });
    if (AppointmentData) {
      return res.status(200).json({
        data: AppointmentData,
        message: "Success",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const UpdateAppointment = async (req, res) => {
  try {
    const { Patient, Doctor, AppointmentDate, Status } = req.body;
    const Appointmentid = req.params.appointment_id;
    const UpdatedData = await AppointmentModel.updateOne(
      { _id: Appointmentid },
      {
        $set: {
          Patient: Patient,
          Doctor: Doctor,
          AppointmentDate: AppointmentDate,
          Status: Status,
        },
      }
    );
    UpdatedData.save();
    console.log(UpdatedData);
    if (UpdatedData.acknowledged) {
      return res.status(201).json({
        message: "Updated",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const DeleteAppointment = async (req, res) => {
  try {
    const Appointmentid = req.params.appointment_id;
    const DeletedData = await AppointmentModel.deleteOne({ _id: Appointmentid });
    if (DeletedData.acknowledged) {
      return res.status(200).json({
        message: "Appointment Deleted",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
