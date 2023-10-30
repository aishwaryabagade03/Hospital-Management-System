import React, { useEffect} from "react";
import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";
import SpinnerLoadComp from "../Spinner/SpinnerComp";
import { getAppointments,deleteAppointment } from "../../redux/Appointments/Action";
import { useDispatch,useSelector } from "react-redux";
const Appointments = ({isLoading}) => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getAppointments())
  },[dispatch])
  const data=useSelector((state)=>state.appointment.appointments);
  if (isLoading) {
    return <SpinnerLoadComp />;
  }
  const onDeleteHandler = (appointmentid) => {
   dispatch(deleteAppointment(appointmentid))
   dispatch(getAppointments())
  };
  return (
    <>
        <Container>
          <span>
            <h1 className="text-start mb-3">Appointments:</h1>
         <div className="text-start">
         <button className="bg-dark border-white border px-4 py-2 mb-3">
              <Link
                className="text-decoration-none text-white"
                to={"/add-appointment"}
              >
                Add Appointment
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
                <th>AppointmentDate</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(data)?(
                data.map((appointment,ind)=>(
                  <tr key={ind}>
                  <td>{++ind}</td>
                  <td>{appointment?.Patient} </td>
                  <td>{appointment?.Doctor} </td>
                  <td>{new Date(appointment?.AppointmentDate).toLocaleDateString()}</td>
                  <td>{appointment?.Status}</td>
                  <td>
                    <button className="bg-dark me-1 ">
                      <Link
                        className="text-decoration-none text-white"
                        to={"/edit-appointment/" + appointment?._id}
                      >
                        Update
                      </Link>
                    </button>
                    <button onClick={() => onDeleteHandler(appointment._id)} className="bg-dark text-white">
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

  


export default Appointments;