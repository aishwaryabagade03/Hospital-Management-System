import React from "react";
import { Formik } from "formik";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addDoctor } from "../../redux/Doctors/Action";
const AddDoctor = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div>
      <Container>
        <Row className="justify-content-center">
          <Col md={5}>
            <Card className="m-4 p-4">
              <h2>Add Doctor</h2>
              <Formik
                initialValues={{
                  Name: "",
                  Specialization: "",
                  Phone: "",
                  Availability: "",
                }}
                validate={(values) => {
                  const errors = {};
                  if (!values.Name) {
                    errors.Name = "Name is required";
                  }
                  if (!values.Specialization) {
                    errors.Specialization = "Specialization is required";
                  }
                  if (!values.Phone) {
                    errors.Phone = "Contact is required";
                  }
                  if (!values.Availability) {
                    errors.Availability = "This field is required";
                  }
                  return errors;
                }}
                onSubmit={async (values, { setSubmitting }) => {
                  try {
                    dispatch(addDoctor(values));
                    Navigate('/doctors');
                  } catch (error) {
                    console.error('Error adding doctor:', error);
                  } finally {
                    setSubmitting(false);
                  }
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
                    <input
                      type="text"
                      name="Specialization"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="form-control mt-3"
                      value={values.Specialization}
                      placeholder="Your Specialization"
                    />
                    <input
                      type="number"
                      name="Phone"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="form-control mt-3"
                      value={values.Phone}
                      placeholder="Your Contact"
                    />
                    <input
                      type="text"
                      name="Availability"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="form-control mt-3"
                      value={values.Availability}
                      placeholder="Your Availability"
                    />
                    <button
                      type="submit"
                      className="bg-secondary btn px-4 py-2 text-white mt-4"
                      disabled={isSubmitting}
                    >
                      Add Doctor
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

export default AddDoctor;
