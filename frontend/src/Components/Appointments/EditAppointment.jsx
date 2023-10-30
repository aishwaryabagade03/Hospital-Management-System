import React, { useEffect} from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import { Formik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { singleAppointment, updateAppointment } from "../../redux/Appointments/Action";
const EditAppointment = () => {
  const appointmentID = useParams()
  console.log("appointmentID:", appointmentID.appointment_id)
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(singleAppointment(appointmentID.appointment_id))
  },[])

  const appointment = useSelector((state)=> state.appointment.appointments)
  console.log(appointment)
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={5}>
          <Card className="m-4 p-4">
            <h2>Update Appointment</h2>
            <Formik
             enableReinitialize={true}
              initialValues={{
                Patient: appointment?.Patient,
                Doctor: appointment?.Doctor,  
                AppointmentDate: appointment?.AppointmentDate,
                Status: appointment?.Status              
              }}
              validate={(values) => {
                const errors = {};
                if (!values.Patient) {
                  errors.Patientid = "Please enter patient id";
                }
                if (!values.Doctor) {
                  errors.Doctorid = "Please enter doctor id";
                }      
                if (!values.AppointmentDate) {
                  errors.AppointmentDate = "Enter the date";
                }
                if (!values.Status) {
                  errors.Status = "Enter the Status";
                }                 
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  dispatch(updateAppointment(values, appointment._id))
                  console.log(values,appointment._id)
                  setSubmitting(false);
                  Navigate('/appointments')
                }, 400);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
              }) => (
                <form onSubmit={handleSubmit}>
                  <input
                      type="text"
                      name="Patient"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="form-control mt-3"
                      value={values.Patient}
                      placeholder="Enter Patient Name"
                    />  
                    <input
                      type="text"
                      name="Doctor"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="form-control mt-3"
                      value={values.Doctor}
                      placeholder="Enter Doctor Name"
                    />  
                    <input
                      type="date"
                      name="AppointmentDate"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="form-control mt-3"
                      value={values.AppointmentDate}
                      placeholder="Enter AppointmentDate"
                    />
                     <input
                      type="text"
                      name="Status"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="form-control mt-3"
                      value={values.Status}
                      placeholder="Enter Status"
                    />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-secondary text-white px-4 py-2 mt-3"
                  >
                    Update
                  </button>
                </form>
              )}
            </Formik>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default EditAppointment;