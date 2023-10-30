import {combineReducers} from "redux";
import patientReducer from "./Patients/Reducer";
import doctorReducer from "./Doctors/Reducer"
import nurseReducer from "./Nurses/Reducer";
import appointmentReducer from "./Appointments/Reducer";
import bedallotmentReducer from "./Bedallotment/Reducer";
import medicalrecordReducer from "./MedicalRecord/Reducer";
import userReducer from "./User/Reducer";
const rootReducer = combineReducers({
  patient: patientReducer,
  doctor: doctorReducer,
  nurse: nurseReducer,
  appointment: appointmentReducer,
  bedallotment: bedallotmentReducer,
  medicalrecord: medicalrecordReducer ,
  user: userReducer
})

export default rootReducer