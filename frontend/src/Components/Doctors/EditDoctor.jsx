import React, {useEffect}from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import { Formik } from "formik";
import { useNavigate,useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateDoctor, singleDoctor } from "../../redux/Doctors/Action";

const Editdoctor = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const Docterid = useParams()
  useEffect(()=>{
    dispatch(singleDoctor(Docterid.doctor_id))
  },[])

  const doctor = useSelector((state)=> state.doctor.doctors)
  console.log(doctor)
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={5}>
          <Card className="m-4 p-4">
            <h2>Update doctor</h2>
            <Formik
               enableReinitialize={true}
              initialValues={{
               Name: doctor?.Name,
               Specialization: doctor?.Specialization,
               Phone: doctor?.Phone,
               Availability: doctor?.Availability,
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
                  errors.Availability = "Availability is required";
                }
                return errors;
              }}
              
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  dispatch(updateDoctor(values, doctor._id))
                  console.log(values,doctor._id)
                  setSubmitting(false);
                  Navigate('/doctors')
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
                      type="text"
                      name="Specialization"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="form-control mt-3"
                      value={values.Specialization}
                      placeholder="Your Specialization"
                    />                 
                    <input
                      type="Number"
                      name="Contact"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="form-control mt-3"
                      value={values.Contact}
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

export default Editdoctor;