import React, { useEffect } from "react";
import { singlePatient, updatePatient } from "../../redux/Patients/Action";
import { useDispatch, useSelector } from "react-redux";
import { Container, Col, Row, Card } from "react-bootstrap";
import { Formik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
const EditPatient = () => {
  const patientID = useParams()
  console.log(patientID.patient_id)
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(singlePatient(patientID.patient_id))
  },[])

  const patient = useSelector((state)=> state.patient.patients)
  console.log(patient)

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={5}>
          <Card className="m-4 p-4">
            <h2>Update Patient</h2>
            <Formik
            enableReinitialize={true}
              initialValues={{
                Name: patient?.Name,
                Email: patient?.Email,
                Address: patient?.Address,
                PhoneNumber: patient?.PhoneNumber,
                Sex: patient?.Sex,
                DOB: patient?.DOB,
                Age: patient?.Age,
                BloodGroup: patient?.BloodGroup,
              }}
              validate={(values) => {
                const errors = {};
                if (!values.Name) {
                  errors.Name = "Name is required";
                }

                if (!values.Email) {
                  errors.Email = "Email is Required";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.Email)
                ) {
                  errors.Email = "Invalid email address";
                }

                if (!values.Address) {
                  errors.Address = "Address is required";
                }
                if (!values.PhoneNumber) {
                  errors.PhoneNumber = "Contact is required";
                }
                if (!values.Sex) {
                  errors.Sex = "Gender is required";
                }
                if (!values.DOB) {
                  errors.DOB = "DOB is required";
                }
                if (!values.Age) {
                  errors.Age = "Age is required";
                }
                if (!values.BloodGroup) {
                  errors.BloodGroup = "Bloodgroup is required";
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  dispatch(updatePatient(values, patient._id))
                  console.log(values,patient._id)
                  setSubmitting(false);
                  Navigate('/patient-list')
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
                    name="Name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="form-control mt-3"
                    value={values.Name}
                    placeholder="Your Name"
                  />
                  <input
                    type="email"
                    name="Email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="form-control mt-3"
                    value={values.Email}
                    placeholder="Your Email"
                  />
                  {errors.Email && touched.Email && errors.Email}
                  <input
                    type="text"
                    name="Address"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="form-control mt-3"
                    value={values.Address}
                    placeholder="Your Address"
                  />
                  <input
                    type="Number"
                    name="PhoneNumber"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="form-control mt-3"
                    value={values.PhoneNumber}
                    placeholder="Your Contact"
                  />
                  <select
                    name="Sex"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="form-control mt-2"
                    value={values.Sex}
                  >
                    <option value="" disabled>
                      Select Gender
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                  <input
                    type="date"
                    name="DOB"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="form-control mt-3"
                    value={values.DOB}
                    placeholder="Your DOB"
                  />
                  <input
                    type="number"
                    name="Age"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="form-control mt-3"
                    value={values.Age}
                    placeholder="Your Age"
                  />
                  <input
                    type="text"
                    name="BloodGroup"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="form-control mt-3"
                    value={values.BloodGroup}
                    placeholder="Your bloodgroup"
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

export default EditPatient;
