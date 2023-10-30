import React from "react";
import { Formik } from "formik";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { addPatient } from "../../redux/Patients/Action";
import { useDispatch } from "react-redux";

const AddPatient = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  return (
    <div>
      <Container>
        <Row className="justify-content-center">
          <Col md={5}>
            <Card className="m-4 p-4">
              <h2>Add Patient</h2>
              <Formik
                initialValues={{Name:"", Email: "",Address:"",PhoneNumber:"",Sex:"",DOB:"",Age:"",BloodGroup:"" }}
                validate={(values) => {
                  const errors = {};
                  if (!values.Name) {
                    errors.Name = "Name is required";
                  }

                  if (!values.Email) {
                    errors.Email = "Email is Required";
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                      values.Email
                    )
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
                    dispatch(addPatient(values))
                    .then(()=>{
                      Navigate("/patient-list")
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
                      type="number"
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
                    <button type="submit"className="bg-secondary btn px-4 py-2 text-white mt-4" disabled={isSubmitting}>
                      Add Patient
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

export default AddPatient;
