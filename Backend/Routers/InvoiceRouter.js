import { AddInvoice, AllInvoice,GetInvoice,UpdateInvoice,DeleteInvoice } from "../Controllers/InvoiceController";
import express from "express"
import RoleAuth from "../Middleware/RoleAuth";

const router = express.Router()
router.post("/add-invoice", RoleAuth, AddInvoice)
router.get("/all-invoice",RoleAuth,AllInvoice)
router.get("/get-invoice/:Invoice_id",RoleAuth, GetInvoice)
router.put("/update-invoice/:Invoice_id",RoleAuth,UpdateInvoice)
router.delete("/delete-invoice/:Invoice_id",RoleAuth,DeleteInvoice)

export default router
