import { AddPatient,AllPatients,GetPatient,UpdatePatient,DeletePatient } from "../Controllers/PatientController";
import express from "express";
// import RoleAuth from "../Middleware/RoleAuth";
const router = express.Router()

router.post("/add-patient",AddPatient)
router.get("/all-patients",AllPatients)
router.get("/get-patient/:Patient_id",GetPatient)
router.put("/update-patient/:Patient_id",UpdatePatient)
router.delete("/delete-patient/:Patient_id",DeletePatient)

export default router