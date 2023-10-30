import axios from "axios";

export const singleuser =(userid, UserData)=>{
  return(dispatch)=>{
    dispatch({type: "SINGLE_USER_PENDING"});
    axios
    .get(`http://localhost:5000/User/get-user/${userid}`, UserData)
    .then((res)=>{
      console.log(res);
      dispatch({type: "SINGLE_USER_SUCCESS", payload: res.data.data});
    })
    .catch((err)=>{
      console.log(err);
      dispatch({type: "SINGLE_USER_FAILED", payload: err.message});
    })
  }
}