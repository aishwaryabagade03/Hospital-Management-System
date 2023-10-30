import React from "react";
import { Formik } from "formik";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { addNurses } from "../../redux/Nurses/Action";
import { useDispatch } from "react-redux";

const AddNurse = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div>
      <Container>
        <Row className="justify-content-center">
          <Col md={5}>
            <Card className="m-4 p-4">
              <h2>Add Nurse</h2>
              <Formik
                initialValues={{Name:"",Gender:"",DOB:"",Contact:"",Email:"",Qualification:"",Department:""}}
                validate={(values) => {
                  const errors = {};
                  if (!values.Name) {
                    errors.Name = "Name is required";
                  }
                  if (!values.Gender) {
                    errors.Gender = "Gender is required";
                  }
                  if (!values.DOB) {
                    errors.DOB = "Dateofbirth is required";
                  }
                  if (!values.Contact) {
                    errors.Contact = "Contact is required";
                  }
                  if (!values.Email) {
                    errors.Email = "Email is required";
                  }else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                      values.Email
                    )
                  )
                  if (!values.Qualification) {
                    errors.Qualification = "Qualification is required";
                  }  
                  if (!values.Department) {
                    errors.Department = "Department is required";
                  }            
                  return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                    dispatch(addNurses(values))
                    .then(()=>{
                      Navigate("/nurses")
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
                      placeholder="Enter your Name"
                    />  
                    <select
                      name="Gender"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="form-control mt-2"
                      value={values.Gender}
                    >
                      <option value="" disabled>
                        Select Gender
                      </option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
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
                      name="Contact"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="form-control mt-3"
                      value={values.Contact}
                      placeholder="Your Contact"
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
                      name="Qualification"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="form-control mt-3"
                      value={values.Qualification}
                      placeholder="Your Qualification"
                    />
                      <input
                      type="text"
                      name="Department"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="form-control mt-3"
                      value={values.Department}
                      placeholder="Your Department"
                    />                    
                    <button type="submit" className="bg-secondary btn px-4 py-2 text-white mt-4" disabled={isSubmitting}>
                      Add Nurse
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

export default AddNurse;