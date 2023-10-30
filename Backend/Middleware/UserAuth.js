import jwt from "jsonwebtoken";

const Userauth = async(req,res,next)=>{
try {
  if(req.headers.authorization){
    let token = req.headers.authorization;
    let decodetoken = jwt.verify(token, "SecretKey");
    if(decodetoken){
      next();
    }else {
      return res.status(401).json({
        message: "Invalid token",
      });
    }
  }else {
    return res.status(401).json({
      message: "Invalid token",
    });
  }
} catch (error) {
  return res.status(401).json({
    message: err.message,
  });
}
}


export default Userauth