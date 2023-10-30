import React, {useEffect, useState} from "react";
import { Formik } from "formik";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector} from "react-redux";
import { addMedicalrecord } from "../../redux/MedicalRecord/Action";
import { getPatient } from "../../redux/Patients/Action";
import { getDoctor } from "../../redux/Doctors/Action";

const Addmedicalrecord = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPatient());
  }, [dispatch]);
  const patient = useSelector((state)=>state.patient.patients);


  useEffect(() => {
    dispatch(getDoctor());
  }, [dispatch]);
  const doctor =useSelector((state)=>state.doctor.doctors);
  
  return (
    <div>
      <Container>
        <Row className="justify-content-center">
          <Col md={5}>
            <Card className="m-4 p-4">
              <h2>Add Medicalrecord</h2>
              <Formik
                initialValues={{
                  Patient: "",
                  Doctor: "",
                  Diagnonis: "",
                  Prescription: "",
                  Labtestresults:"",
                  TreatmentHistory:"",
                }}
                validate={(values) => {
                  const errors = {};
                  if (!values.Patient) {
                    errors.Patient = "Please enter patient name";
                  }
                  if (!values.Doctor) {
                    errors.Doctor = "Please enter Doctor";
                  }
                  if (!values.Diagnonis) {
                    errors.Diagnonis = "Enter Diagnonis";
                  }
                  if (!values.Prescription) {
                    errors.Prescription = "Enter Prescription";
                  }
                  if (!values. Labtestresults) {
                    errors. Labtestresults = "Enter Labtestresults";
                  }
                  if (!values.TreatmentHistory) {
                    errors.TreatmentHistory = "Enter TreatmentHistory";
                  }
                  return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                    dispatch(addMedicalrecord(values))
                    .then(()=>{
                      Navigate("/medicalrecords")
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
                     <select
                      name="Patient"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="form-control mt-2"
                      value={values.Patient}
                    >
                      <option value="" disabled>
                        Select Patient
                      </option>
                      {patient.map((patient) => (
                        <option key={patient._id} value={patient._id}>
                          {`${patient.Name}`}
                        </option>
                      ))}
                    </select>
                     <select
                      name="Doctor"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="form-control mt-2"
                      value={values.Doctor}
                    >
                      <option value="" disabled>
                        Select Doctor
                      </option>
                      {doctor.map((doctor) => (
                        <option key={doctor._id} value={doctor._id}>
                          {`${doctor.Name}`}
                        </option>
                      ))}
                    </select>
                    <input
                      type="text"
                      name="Diagnonis"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="form-control mt-3"
                      value={values.Diagnonis}
                      placeholder="Enter Diagnonis"
                    />
                     <input
                      type="text"
                      name="Prescription"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="form-control mt-3"
                      value={values.Prescription}
                      placeholder="Enter Prescription"
                    />
                    <input
                      type="text"
                      name="Labtestresults"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="form-control mt-3"
                      value={values.Labtestresults}
                      placeholder="Enter Labtestresults"
                    />
                    <input
                      type="text"
                      name="TreatmentHistory"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="form-control mt-3"
                      value={values.TreatmentHistory}
                      placeholder="Enter TreatmentHistory"
                    />     
                    <button
                      type="submit"
                      className="bg-secondary btn px-4 py-2 text-white mt-4"
                      disabled={isSubmitting}
                    >
                      Add Medicalrecord
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

export default Addmedicalrecord;