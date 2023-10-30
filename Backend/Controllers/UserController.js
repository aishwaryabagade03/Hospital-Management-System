import UserModel from "../Models/UserModel";
import validator from "validator";
import jwt from "jsonwebtoken";
import Cookies from "cookies";
import bcrypt from "bcrypt";

export const AddUser = async(req,res)=>{
  try {
    const{ Email, Password, role}=req.body
    let hashpassword = bcrypt.hashSync(Password, 8);
    const UserData = new UserModel({
      Email:Email,
      Password:hashpassword,
      role,
    })
    UserData.save()
    if(UserData){
      return res.status(201).json({
        data:UserData,
        message:"User Created"
      })
    } 
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
}

export const Userrecords = async (req, res) => {
  try {
    const UserData = await UserModel.find();
    if (UserData) {
      return res.status(200).json({
        data: UserData,
        message: "Success",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const Getuser = async (req, res) => {
  try {
    const id = req.params.user_id;
    const UserData = await UserModel.findOne({ _id: id });
    if (UserData) {
      return res.status(200).json({
        data: UserData,
        message: "Success",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const UpdateUser = async(req,res)=>{
  try {
    const id = req.params.user_id;
    const{ Email, Password, role}=req.body
    const UserData = await UserModel.findOne({_id: id})
    let hashedpassword = UserData.Password;
    if (Password) {
      hashedpassword= bcrypt.hashSync(Password,8);
    }
    const UpdatedData= await UserModel.updateOne({_id: id},
      {
        $set:{
          Email:Email,
          Password:hashedpassword,
          role,
        }
      })
      UpdatedData.save()
      console.log(UpdatedData)
      if(UpdatedData.acknowledged){
        return res.status(201).json({
          data: UpdatedData,
          message: "Updated",
        });
      }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
}

export const Deleteuser = async (req, res) => {
  try {
    const id = req.params.user_id;
    const DeletedData = await UserModel.deleteOne({ _id: id });
    if (DeletedData.acknowledged) {
      return res.status(200).json({
        message: "Deleted",
      });
    }  
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const Signup = async(req,res)=>{
  try {
    const{ Email, Password}=req.body
    const IsEmail = validator.isEmail(Email);
    const IsPassword = validator.isStrongPassword(Password);
    if (!IsEmail) {
      return res.status(400).json({
        message: "Invalid email",
      });
    }
    if (!IsPassword) {
      return res.status(400).json({
        message: "Passsword must be minLength: 6",
      });
    }
    const NewUser = new UserModel({
      Email:Email,
      Password:Password,
    });
    NewUser.save();
    console.log(NewUser);
    if (NewUser) {
      return res.status(201).json({
        message: "Successfully Registered",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
}

export const Login = async(req,res)=>{
  try {
    const { Email, Password } = req.body;
    const Userexist = await UserModel.findOne({Email: Email})
    if(!Userexist){
      return res.status(400).json({
        message: "User Does Not Exist",
      });
    }
    const passwordComapre = bcrypt.compare(Password, Userexist.Password)
    if (!passwordComapre) {
      return res.status(400).json({
        message: "Wrong Password",
      });
    }
    const Token = jwt.sign(
      {
        ID: Userexist._id,
        Email: Userexist.Email,
        role: Userexist.role,
      },
      process.env.MySecretKey,
      { expiresIn: "2h" }
    );
    return res.status(201).json({
      data: Userexist,
      token: Token,
      message: "Successfully login",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
}

export const Logout = async (req, res) => {
  try {
    var cookies = new Cookies(req, res);
    cookies.set("Users", null);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};