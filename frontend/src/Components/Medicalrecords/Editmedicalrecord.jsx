import React, { useEffect} from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import { Formik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { singleMedicalrecord, updateMedicalrecord } from "../../redux/MedicalRecord/Action";
import { getPatient } from "../../redux/Patients/Action";
import { getDoctor } from "../../redux/Doctors/Action";

const Editmedicalrecord = () => {
  const medicalrecordID = useParams()
  console.log("medicalrecordID:", medicalrecordID.medicalrecord_id)
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(singleMedicalrecord(medicalrecordID.medicalrecord_id))
  },[])

  const medicalrecord = useSelector((state)=> state.medicalrecord.medicalrecords)
  console.log(medicalrecord)

  useEffect(() => {
    dispatch(getPatient());
  }, [dispatch]);
  const patient = useSelector((state)=>state.patient.patients);


  useEffect(() => {
    dispatch(getDoctor());
  }, [dispatch]);
  const doctor =useSelector((state)=>state.doctor.doctors);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={5}>
          <Card className="m-4 p-4">
            <h2>Update Medicalrecord</h2>
            <Formik
             enableReinitialize={true}
              initialValues={{
                Patient: medicalrecord?.Patient,
                Doctor: medicalrecord?.Doctor,
                Diagnonis: medicalrecord?.Diagnonis,
                Prescription: medicalrecord?.Prescription,
                Labtestresults:medicalrecord?.Labtestresults,
                TreatmentHistory:medicalrecord?.TreatmentHistory,        
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
                  dispatch(updateMedicalrecord(values, medicalrecord._id))
                  console.log(values,medicalrecord._id)
                  setSubmitting(false);
                  Navigate('/medicalrecords')
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

export default Editmedicalrecord;