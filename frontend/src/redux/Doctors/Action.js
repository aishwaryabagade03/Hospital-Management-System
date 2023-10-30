import axios from "axios";
export const getDoctor =()=>{
  return(dispatch)=>{
    dispatch({type: "GET_DOCTOR_PENDING"});
    axios
    .get("http://localhost:5000/Doctor/alldoctors")
    .then((res)=>{
      console.log(res);
      dispatch({type: "GET_DOCTOR_SUCCESS", payload: res.data.data});
    })
    .catch((err)=>{
      console.log(err);
      dispatch({type: "GET_DOCTOR_FAILED", payload: err.message});
    })
  }
}

export const singleDoctor =(doctorid)=>{
  return(dispatch)=>{
    dispatch({type: "SINGLE_DOCTOR_PENDING"});
    axios
    .get(`http://localhost:5000/Doctor/getdoctor/${doctorid}`)
    .then((res)=>{
      console.log(res);
      dispatch({type: "SINGLE_DOCTOR_SUCCESS", payload: res.data.data});
    })
    .catch((err)=>{
      console.log(err);
      dispatch({type: "SINGLE_DOCTOR_FAILED", payload: err.message});
    })
  }
}

export const addDoctor = (doctorData) => {
  return async (dispatch) => {
    dispatch({ type: "ADD_DOCTOR_PENDING" });
    try {
      const response = await axios.post( 
        "http://localhost:5000/Doctor/add-doctor",
        doctorData
      );
      console.log(response);
      dispatch({ type: "ADD_DOCTOR_SUCCESS", payload: response.data });
    } catch (error) {
      console.error(error);
      dispatch({ type: "ADD_DOCTOR_FAILED", payload: error.message });
    }
  };
};

export const updateDoctor =(values,doctorid)=>{
  return(dispatch)=>{
    dispatch({type: "UPDATE_DOCTOR_PENDING"});
    axios
    .put(`http://localhost:5000/Doctor/update-doctor/${doctorid}`, values)
    .then((res)=>{
      console.log(res);
      dispatch({type: "UPDATE_DOCTOR_SUCCESS", payload: res.data.data});
    })
    .catch((err)=>{
      console.log(err);
      dispatch({type: "UPDATE_DOCTOR_FAILED", payload: err.message});
    })
  }
}

export const deleteDoctor =(doctorid)=>{
  return(dispatch)=>{
    dispatch({type: "DELETE_DOCTOR_PENDING"});
    axios
    .delete(`http://localhost:5000/Doctor/delete-doctor/${doctorid}`)
    .then((res)=>{
      console.log(res);
      dispatch({type: "DELETE_DOCTOR_SUCCESS", payload: res.data.data});
    })
    .catch((err)=>{
      console.log(err);
      dispatch({type: "DELETE_DOCTOR_FAILED", payload: err.message});
    })
  }

}