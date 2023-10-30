import React, { useEffect} from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import { Formik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { singleBedallotment, updateBedallotment } from "../../redux/Bedallotment/Action";
const Editbedallotment = () => {
  const bedallotmentID = useParams()
  console.log("bedallotmentID:", bedallotmentID.bedallotment_id)
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(singleBedallotment(bedallotmentID.bedallotment_id))
  },[])

  const bedallotment = useSelector((state)=> state.bedallotment.bedallotments)
  console.log(bedallotment)
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={5}>
          <Card className="m-4 p-4">
            <h2>Update bedallotment</h2>
            <Formik
             enableReinitialize={true}
              initialValues={{
                Patient: bedallotment?.Patient,
                PatientStatus: bedallotment?.PatientStatus,
                BedType: bedallotment?.BedType,
                BedNumber: bedallotment?.BedNumber,
                AllotmentDate:bedallotment?.AllotmentDate,
                DischargeDate:bedallotment?.DischargeDate,            
              }}
              validate={(values) => {
                const errors = {};
                if (!values.Patient) {
                  errors.Patient = "Please enter patient name";
                }
                if (!values.PatientStatus) {
                  errors.PatientStatus = "Please enter PatientStatus";
                }
                if (!values.BedType) {
                  errors.BedType = "Enter Bedtype";
                }
                if (!values.BedNumber) {
                  errors.BedNumber = "Enter BedNumber";
                }
                if (!values. AllotmentDate) {
                  errors. AllotmentDate = "Enter AllotmentDate";
                }
                if (!values.DischargeDate) {
                  errors.DischargeDate = "Enter DischargeDate";
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  dispatch(updateBedallotment(values, bedallotment._id))
                  console.log(values,bedallotment._id)
                  setSubmitting(false);
                  Navigate('/bedallotments')
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
                     <select
                      name="PatientStatus"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="form-control mt-2"
                      value={values.PatientStatus}
                    >
                      <option value="" disabled>
                        Select PatientStatus
                      </option>
                      <option value="01: Discharged to home or self care">01: Discharged to home or self care</option>
                      <option value="02: Discharged/transferred to another short-term hospital">02: Discharged/transferred to another short-term hospital</option>
                      <option value="03: Discharged/transferred to a nursing facility">03: Discharged/transferred to a nursing facility</option>
                      <option value="04: Discharged/transferred to an intermediate care facility">04: Discharged/transferred to an intermediate care facility</option>
                      <option value="05: Discharged/transferred to another type institution">05: Discharged/transferred to another type institution</option>
                      <option value="06: Discharged/transferred to home under care of organized home health service organization">06: Discharged/transferred to home under care of organized home health service organization</option>
                      <option value="20: Expired">20: Expired</option>
                      <option value="50: Discharged/transferred to hospice - home">50: Discharged/transferred to hospice - home</option>
                      <option value="Expected">Expected</option>
                      <option value="Arrived">Arrived</option>
                      <option value="Reviewed">Reviewed</option>
                      <option value="Admitted">Admitted</option>
                      <option value="Ready for Discharge">Ready for Discharge</option>
                      <option value="Discharged">Discharged</option>
                    </select>
                    <input
                      type="text"
                      name="BedType"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="form-control mt-3"
                      value={values.BedType}
                      placeholder="Enter BedType"
                    />
                     <input
                      type="number"
                      name="BedNumber"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="form-control mt-3"
                      value={values.BedNumber}
                      placeholder="Enter BedNumber"
                    />
                    <input
                      type="date"
                      name="AllotmentDate"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="form-control mt-3"
                      value={values.AllotmentDate}
                      placeholder="Enter AllotmentDate"
                    />
                    <input
                      type="date"
                      name="DischargeDate"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="form-control mt-3"
                      value={values.DischargeDate}
                      placeholder="Enter DischargeDate"
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

export default Editbedallotment;