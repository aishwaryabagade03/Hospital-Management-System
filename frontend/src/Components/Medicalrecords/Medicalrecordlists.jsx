import React, { useEffect} from "react";
import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";
import SpinnerLoadComp from "../Spinner/SpinnerComp";
import { getMedicalrecord, deleteMedicalrecord } from "../../redux/MedicalRecord/Action";
import { useDispatch,useSelector } from "react-redux";

const Medicalrecords = ({isLoading}) => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getMedicalrecord())
  },[dispatch])
  const data=useSelector((state)=>state.medicalrecord.medicalrecords);
  if (isLoading) {
    return <SpinnerLoadComp />;
  }
  const onDeleteHandler = (medicalrecordid) => {
   dispatch(deleteMedicalrecord(medicalrecordid))
   dispatch(getMedicalrecord())
  };
  return (
    <>
        <Container>
          <span>
            <h1 className="text-start mb-3">Medical Records:</h1>
           <div className="text-start">
           <button  className="bg-dark border-white border px-4 py-2 mb-3">
              <Link
                className="text-decoration-none text-white"
                to={"/add-medicalrecord"}
              >
                Add medicalrecord
              </Link>
            </button>
           </div>
          </span>
          <table className="table table-bordered border-black">
            <thead>
              <tr>
                <th>Sr. No</th>
                <th>Patient</th>
                <th>Doctor</th>
                <th>Diagnonis</th>
                <th>Prescription</th>
                <th>Labtestresults</th>
                <th>TreatmentHistory</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(data)?(
                data.map((medicalrecord,ind)=>(
                  <tr key={ind}>
                  <td>{++ind}</td>
                  <td>{medicalrecord?.Patient} </td>
                  <td>{medicalrecord?.Doctor} </td>
                  <td>{medicalrecord?.Diagnosis}</td>
                  <td>{medicalrecord?.Prescription}</td>
                  <td>{medicalrecord?.Labtestresults}</td>
                  <td>{medicalrecord?.TreatmentHistory}</td>
                  <td>
                    <button className="bg-dark me-1 ">
                      <Link
                        className="text-decoration-none text-white"
                        to={"/edit-medicalrecord/" + medicalrecord?._id}
                      >
                        Update
                      </Link>
                    </button>
                    <button onClick={() => onDeleteHandler(medicalrecord._id)} className="bg-dark text-white">
                      Delete
                    </button>
                  </td>
                </tr>
                ))
              ):(
                <tr>
                <td colSpan="9">Data is not in the expected format.</td>
              </tr>
              )}
            </tbody>
          </table>
        </Container>
    </>
  );
  }

  


export default Medicalrecords;