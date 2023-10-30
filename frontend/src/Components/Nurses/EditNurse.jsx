import React, { useEffect } from "react";
import { singleNurse, updateNurse } from "../../redux/Nurses/Action";
import { useDispatch, useSelector } from "react-redux";
import { Container, Col, Row, Card } from "react-bootstrap";
import { Formik } from "formik";
import { useNavigate, useParams } from "react-router-dom";

const EditNurse = () => {
  const nurseID = useParams()
  console.log("nurseID:", nurseID.nurse_id)
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(singleNurse(nurseID.nurse_id))
  },[])

  const nurse = useSelector((state)=> state.nurse.nurses)
  console.log(nurse)
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={5}>
          <Card className="m-4 p-4">
            <h2>Update Nurse</h2>
            <Formik
              enableReinitialize={true}
              initialValues={{
                Full: nurse?.Name,
                Gender: nurse?.Gender,  
                DOB: nurse?.DOB,
                Contact:nurse?.Contact,
                Email:nurse?.Email,
                Qualification:nurse?.Qualification,
                Department: nurse?.Department              
              }}
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
                  dispatch(updateNurse(values, nurse._id))
                  console.log(values,nurse._id)
                  setSubmitting(false);
                  Navigate('/nurses')
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

export default EditNurse;