import React, { useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";
import { getDoctor, deleteDoctor } from "../../redux/Doctors/Action";
import SpinnerLoadComp from "../Spinner/SpinnerComp";
import { useDispatch, useSelector } from "react-redux";

const Doctors = ({ isLoading }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDoctor());
  }, [dispatch]);
  const data = useSelector((state) => state.doctor.doctors);
  const data2 = useSelector((state)=>state)
  console.log(data2);
  if (isLoading) {
    return <SpinnerLoadComp />;
  }
  const onDeleteHandler = (doctorid) => {
    dispatch(deleteDoctor(doctorid));
    dispatch(getDoctor());
  };
  return (
    <>
      <Container>
        <span>
          <h1 className="text-start mb-3">Doctors :</h1>
         <div className="text-start">
         <button  className="bg-dark border-white border px-4 py-2 mb-3">
            <Link className="text-decoration-none text-white" to={"/add-doctor"}>
              Add Doctor
            </Link>
          </button>
         </div>
        </span>
        <table className="table table-bordered border-black">
          <thead>
            <tr>
              <th>Sr. No</th>
              <th>Name</th>
              <th>Specialization</th>
              <th>Phone</th>
              <th>Availability</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {Array.isArray(data) && data.length > 0 ? (
              data.map((doctor, ind) => (
                <tr key={ind}>
                  <td>{++ind}</td>
                  <td>{doctor?.Name} </td>
                  <td>{doctor?.Specialization}</td>
                  <td>{doctor?.Phone} </td>
                  <td>{doctor?.Availability}</td>
                  <td>
                    <button className="bg-dark me-1 ">
                      <Link
                        className="text-decoration-none text-white"
                        to={"/edit-doctor/" + doctor._id}
                      >
                        Update
                      </Link>
                    </button>
                    <button onClick={() => onDeleteHandler(doctor._id)}  className="bg-dark text-white">
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No doctors available.</td>
              </tr>
            )}
          </tbody>
        </table>
      </Container>
    </>
  );
};

export default Doctors;
