import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import DoctorRouter from "./Routers/DoctorRouter";
import PatientRouter from "./Routers/PatientRouter";
import NurseRouter from "./Routers/NurseRouter";
import AppointmentRouter from "./Routers/AppointmentRouter";
import BedAllotmentRouter from "./Routers/BedAllotmentRouter";
import MedicalrecordRouter from "./Routers/MedicalrecordRouter";
import InvoiceRouter from "./Routers/InvoiceRouter";
import UserRouter from "./Routers/UserRouter";
var app = express();
app.use(express.json());
app.use(express.static(__dirname));
app.use(express.urlencoded({ extended: true }));

app.use(cors(corsOptions))
var corsOptions={
  origin: "*",
  optionsSuccessStatus: 200,
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Your server running on http://localhost:" + PORT);
});

mongoose
  .connect("mongodb://127.0.0.1:27017/" + process.env.DBName)
  .then(() => console.log("Connected!"));

app.use("/Doctor", DoctorRouter);
app.use("/Patient",PatientRouter);
app.use("/Nurse", NurseRouter)
app.use("/Appointment",AppointmentRouter)
app.use("/BedAllotment", BedAllotmentRouter)
app.use("/Medicalrecord", MedicalrecordRouter)
app.use("/Invoice",InvoiceRouter)
app.use("/User", UserRouter)