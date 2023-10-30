import { AddUser,Userrecords,Getuser, UpdateUser,Deleteuser,Signup,Login,Logout } from "../Controllers/UserController";
import express from "express"
const router = express.Router();
import RoleAuth from "../Middleware/RoleAuth";

router.post("/add-user", AddUser)
router.get("/userrecords", Userrecords)
router.get("/get-user/:user_id",RoleAuth, Getuser)
router.put("/update-user/:user_id", UpdateUser)
router.delete("/delete-user/:user_id", Deleteuser)
router.post("/signup", Signup)
router.post("/login",Login)
router.delete("/logout", Logout)

export default router