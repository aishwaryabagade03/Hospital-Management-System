import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPatient, deletePatient } from "../../redux/Patients/Action";
import { Link } from "react-router-dom";
import SpinnerLoadComp from "../Spinner/SpinnerComp";
const PatientList = ({ isLoading }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPatient());
  }, [dispatch]);

  const data = useSelector((state) => state.patient.patients);
  // console.log(data);

  if (isLoading) {
    return <SpinnerLoadComp />;
  }

  const OnDeleteHandler = (patientid) => {
    dispatch(deletePatient(patientid));
    dispatch(getPatient())
  };

  return (
    <>
      <span >
        <h1 className="text-start mb-3">Patients :</h1>
       <div className="text-start">
       <button className="bg-dark border-white border px-4 py-2 mb-3">
          <Link className="text-decoration-none text-white" to={"/add-patient"}>
            Add Patient
          </Link>
        </button>
       </div>
      </span>
      <table className="table table-bordered darkTable border-black">
        <thead >
          <tr>
            <th>Sr. No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>PhoneNumber</th>
            <th>Gender</th>
            <th>DOB</th>
            <th>Age</th>
            <th>BloodGroup</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(data) ? (
            data.map((patient, ind) => (
              <tr key={ind}>
                <td>{++ind}</td>
                <td>{patient.Name}</td>
                <td>{patient.Email}</td>
                <td>{patient.Address}</td>
                <td>{patient.PhoneNumber}</td>
                <td>{patient.Sex}</td>
                <td>{new Date(patient.DOB).toLocaleDateString()}</td>
                <td>{patient.Age}</td>
                <td>{patient.BloodGroup}</td>
                <td>
                  <button className="bg-dark me-1 ">
                    <Link
                      className="text-decoration-none text-white"
                      to={"/edit-patient/" + patient?._id}
                    >
                      Update
                    </Link>
                  </button>
                  <button onClick={() => OnDeleteHandler(patient._id)} className="bg-dark text-white">
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9">Data is not in the expected format.</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default PatientList;
