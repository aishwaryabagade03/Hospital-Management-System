import axios from "axios";
export const getNurses =()=>{
  return(dispatch)=>{
    dispatch({type: "GET_NURSE_PENDING"});
    axios
    .get("http://localhost:5000/Nurse/allnurse", )
    .then((res)=>{
      console.log(res);
      dispatch({type: "GET_NURSE_SUCCESS", payload: res.data.data});
    })
    .catch((err)=>{
      console.log(err);
      dispatch({type: "GET_NURSE_FAILED", payload: err.message});
    })
  }
}


export const addNurses = (nurseData) => {
  return (dispatch) => {
    dispatch({type: "ADD_NURSE_PENDING"});
    return axios.post('http://localhost:5000/Nurse/add-nurse', nurseData)
      .then((response) => {
        dispatch({
          type: "ADD_NURSE_SUCCESS",
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: "ADD_NURSE_FAILED",
          payload: error,
        });
        throw error; 
      });
  };
};


export const singleNurse =(nurseid, nurseData)=>{
  return(dispatch)=>{
    dispatch({type: "SINGLE_NURSE_PENDING"});
    axios
    .get(`http://localhost:5000/Nurse/getnurse/${nurseid}`, nurseData)
    .then((res)=>{
      console.log(res);
      dispatch({type: "SINGLE_NURSE_SUCCESS", payload: res.data.data});
    })
    .catch((err)=>{
      console.log(err);
      dispatch({type: "SINGLE_NURSE_FAILED", payload: err.message});
    })
  }
}


export const updateNurse =(values, nurseid)=>{
  return(dispatch)=>{
    dispatch({type: "UPDATE_NURSE_PENDING"});
    axios
    .put(`http://localhost:5000/Nurse/update-nurse/${nurseid}`, values)
    .then((res)=>{
      console.log(res);
      dispatch({type: "UPDATE_NURSE_SUCCESS", payload: res.data.data});
    })
    .catch((err)=>{
      console.log(err);
      dispatch({type: "UPDATE_NURSE_FAILED", payload: err.message});
    })
  }
}

export const deleteNurse =(nurseid)=>{
  return(dispatch)=>{
    dispatch({type: "DELETE_NUSRE_PENDING"});
    axios
    .delete(`http://localhost:5000/Nurse/delete-nurse/${nurseid}`)
    .then((res)=>{
      console.log(res);
      dispatch({type: "DELETE_NURSE_SUCCESS", payload: res.data.data});
    })
    .catch((err)=>{
      console.log(err);
      dispatch({type: "DELETE_NURSE_FAILED", payload: err.message});
    })
  }
}