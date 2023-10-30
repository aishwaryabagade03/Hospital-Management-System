import { AddMedicalrecord, AllMedicalrecords, GetMedicalrecord,UpdateMedicalrecord,DeleteMedicalrecord } from "../Controllers/MedicalrecordsController";
import express from "express"

const router = express.Router();

router.post("/add-medical-record", AddMedicalrecord)
router.get("/all-medical-records", AllMedicalrecords)
router.get("/get-medical-record/:medicalrecord_id",GetMedicalrecord)
router.put("/update-medical-record/:medicalrecord_id",UpdateMedicalrecord)
router.delete("/delete-medical-record/:medicalrecord_id",DeleteMedicalrecord)

export default router
