import jwt from "jsonwebtoken";

const RoleAuth = (req,res, next)=>{
  try {
    const token = req.headers.authorization;
    if(!token){
      return res.status(401).json({
        message:"No token provided, Access denied"
      })
    }
    jwt.verify(token, process.env.MySecretKey,(err, decoded)=>{
      if(err){
        return res.status(401).json({
          message:"Invalid Token"
        })
      }
      req.user = decoded;
      console.log(decoded)
      if(decoded.role === "receptionist" || decoded.role === "admin" || decoded.role === "doctor" || decoded.role === "nurse"){
        next();
      }else{
        return res.status(403).json({
          message:"You are not authorized to access this resource."
        })
      }
    })
  } catch (error) {
    return res.status(401).json({
      message: err.message,
    });
  }
}

export default RoleAuth