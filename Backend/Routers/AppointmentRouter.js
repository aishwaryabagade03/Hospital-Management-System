import { AddAppointment,AllAppointments,GetAppointment,UpdateAppointment,DeleteAppointment } from "../Controllers/AppointmentController";
import express from "express";
// import RoleAuth from "../Middleware/RoleAuth";
const router = express.Router();

router.post("/add-appointment", AddAppointment)
router.get("/all-appointments",AllAppointments)
router.get("/get-appointment/:appointment_id",GetAppointment)
router.put("/update-appointment/:appointment_id",UpdateAppointment)
router.delete("/delete-appointment/:appointment_id",DeleteAppointment)

export default router