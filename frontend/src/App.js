import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import DashboardRoute from "./Components/Home/DashboardRoute";
import ProtectedRoute from "./Components/AuthRoutes/ProtectedRoute";
import PublicRoute from "./Components/AuthRoutes/PublicRoute";
import Sidebar from "./Components/Sidebar";
import LoginComp from "./Components/Auth/LoginComp";
import EditPatient from "./Components/Patients/EditPatient";
import PatientList from "./Components/Patients/PatientList";
import AddDoctor from "./Components/Doctors/AddDoctor";
import SignupComp from "./Components/Auth/SignupComp";
import Doctors from "./Components/Doctors/DoctorList";
import AddPatient from "./Components/Patients/AddPatient";
import EditDoctor from "./Components/Doctors/EditDoctor";
import Nurse from "./Components/Nurses/NurseList";
import AddNurse from "./Components/Nurses/AddNurse";
import EditNurse from "./Components/Nurses/EditNurse";
import AddAppointment from "./Components/Appointments/AddAppointment";
import EditAppointment from "./Components/Appointments/EditAppointment";
import Appointments from "./Components/Appointments/Appointments";
import Bedallotments from "./Components/Bedallotments/Bedallotmentlists";
import AddBedallotment from "./Components/Bedallotments/Addbedallotment";
import Editbedallotment from "./Components/Bedallotments/Editbedallotment";
import Medicalrecords from "./Components/Medicalrecords/Medicalrecordlists";
import Addmedicalrecord from "./Components/Medicalrecords/Addmedicalrecord";
import Editmedicalrecord from "./Components/Medicalrecords/Editmedicalrecord";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
   <>
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Router>
          <Routes>
            <Route  element={<ProtectedRoute />}>
              <Route path="/" element={<DashboardRoute />} />
              <Route path="/patient-list" element={<PatientList />} />
              <Route path="/add-patient" element={<AddPatient />} />
              <Route path="/edit-patient/:patient_id" element={<EditPatient />}/>
              <Route path="/doctors" element={<Doctors />} />
              <Route path="/add-doctor" element={<AddDoctor />} />
              <Route path="/edit-doctor/:doctor_id" element={<EditDoctor />} />
              <Route path="/nurses" element={<Nurse />} />
              <Route path="/add-nurse" element={<AddNurse />} />
              <Route path="/edit-nurse/:nurse_id" element={<EditNurse />} />
              <Route path="/appointments" element={<Appointments />} />
              <Route path="/add-appointment" element={<AddAppointment />} />
              <Route
                path="/edit-appointment/:appointment_id"
                element={<EditAppointment />}
              />
              <Route path="/bedallotments" element={<Bedallotments />} />
              <Route path="/add-bedallotment" element={<AddBedallotment />} />
              <Route
                path="/edit-bedallotment/:bedallotment_id"
                element={<Editbedallotment />}
              />
              <Route path="/medicalrecords" element={<Medicalrecords />} />
              <Route path="/add-medicalrecord" element={<Addmedicalrecord />} />
              <Route
                path="/edit-medicalrecord/:medicalrecord_id"
                element={<Editmedicalrecord />}
              />
            </Route>
            <Route element={<PublicRoute />}>
              <Route path="/login" element={<LoginComp />} />
              <Route path="/signup" element={<SignupComp />} />
            </Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
   </>
  );
}

export default App;
