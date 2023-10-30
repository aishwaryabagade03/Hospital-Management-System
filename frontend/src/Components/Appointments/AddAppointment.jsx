import React from "react";
import { Formik } from "formik";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch} from "react-redux";
import { addAppointment } from "../../redux/Appointments/Action";

const AddAppointment = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch()

  return (
    <div>
      <Container>
        <Row className="justify-content-center">
          <Col md={5}>
            <Card className="m-4 p-4">
              <h2>Add Appointment</h2>
              <Formik
                initialValues={{
                  Patient: "",
                  Doctor: "",
                  AppointmentDate: "",
                  Status: "",
                }}
                validate={(values) => {
                  const errors = {};
                  if (!values.Patient) {
                    errors.Patient = "Please enter patient id";
                  }
                  if (!values.Doctor) {
                    errors.Doctor = "Please enter doctor id";
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
                    dispatch(addAppointment(values))
                    .then(()=>{
                      Navigate("/appointments")
                    })
                  setSubmitting(false)
                  },400);
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
                    <select
                      name="Status"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="form-control mt-2"
                      value={values.Status}
                    >
                      <option value="" disabled>
                        Select Status
                      </option>
                      <option value="Scheduled">Scheduled</option>
                      <option value="Completed">Completed</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                    <button
                      type="submit"
                      className="bg-secondary btn px-4 py-2 text-white mt-4"
                      disabled={isSubmitting}
                    >
                      Add Appointment
                    </button>
                  </form>
                )}
              </Formik>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AddAppointment;
