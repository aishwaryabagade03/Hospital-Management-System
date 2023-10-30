import { AddNurse,AllNurse, GetNurse,UpdateNurse,DeleteNurse } from "../Controllers/NurseController";
import express from "express";

const router = express.Router();
router.post("/add-nurse", AddNurse);
router.get("/allnurse", AllNurse);
router.get("/getnurse/:nurse_id", GetNurse);
router.put("/update-nurse/:nurse_id", UpdateNurse);
router.delete("/delete-nurse/:nurse_id", DeleteNurse);

export default router;

