import {
  AddDoctor,
  AllDoctors,
  GetDoctor,
  UpdateDoctor,
  DeleteDoctor,
} from "../Controllers/DoctorController";
import express from "express";

const router = express.Router();

router.post("/add-doctor", AddDoctor);
router.get("/alldoctors", AllDoctors);
router.get("/getdoctor/:doctor_id", GetDoctor);
router.put("/update-doctor/:doctor_id", UpdateDoctor);
router.delete("/delete-doctor/:doctor_id", DeleteDoctor);

export default router;
