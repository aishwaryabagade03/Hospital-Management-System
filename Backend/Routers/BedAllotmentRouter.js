import { AddBedAllotment,AllBedAllotments,GetBedAllotment,UpdateBedAllotment,DeleteBedAllotment } from "../Controllers/BedAllotmentController";
import express  from "express";

const router = express.Router()
router.post("/add-bedallotment", AddBedAllotment)
router.get("/all-bedallotment",AllBedAllotments)
router.get("/get-bedallotment/:bedallotment_id",GetBedAllotment)
router.put("/update-bedallotment/:bedallotment_id",UpdateBedAllotment)
router.delete("/delete-bedallotment/:bedallotment_id",DeleteBedAllotment)

export default router