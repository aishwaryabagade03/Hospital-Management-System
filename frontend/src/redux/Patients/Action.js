import axios from "axios";
export const getPatient =()=>{
  return(dispatch)=>{
    dispatch({type: "GET_PATIENT_PENDING"});
    axios
    .get("http://localhost:5000/Patient/all-patients")
    .then((res)=>{
      console.log(res);
      dispatch({type: "GET_PATIENT_SUCCESS", payload: res.data.data});
    })
    .catch((err)=>{
      console.log(err);
      dispatch({type: "GET_PATIENT_FAILED", payload: err.message});
    })
  }
}

export const singlePatient =(patientid)=>{
  return(dispatch)=>{
    dispatch({type: "SINGLE_PATIENT_PENDING"});
    axios
    .get(`http://localhost:5000/Patient/get-patient/${patientid}`)
    .then((res)=>{
      console.log(res);
      dispatch({type: "SINGLE_PATIENT_SUCCESS", payload: res.data.data});
    })
    .catch((err)=>{
      console.log(err);
      dispatch({type: "SINGLE_PATIENT_FAILED", payload: err.message});
    })
  }
}

export const addPatient = ()=>{
  return(dispatch)=>{
    dispatch({type: "ADD_PATIENT_PENDING"});
    axios
    .post("http://localhost:5000/Patient/add-patient")
    .then((res)=>{
      console.log(res);
      dispatch({type: "ADD_PATIENT_SUCCESS", payload: res.data.data});
    })
    .catch((err)=>{
      console.log(err);
      dispatch({type: "ADD_PATIENT_FAILED", payload: err.message});
    })
  }
}

export const updatePatient =(values,patientid)=>{
  return(dispatch)=>{
    dispatch({type: "UPDATE_PATIENT_PENDING"});
    axios
    .put(`http://localhost:5000/Patient/update-patient/${patientid}`,values)
    .then((res)=>{
      console.log(res);
      console.log(patientid);

      dispatch({type: "UPDATE_PATIENT_SUCCESS", payload: res.data.data});
    })
    .catch((err)=>{
      console.log(err);
      console.log(patientid);
      
      dispatch({type: "UPDATE_PATIENT_FAILED", payload: err.message});
    })
  }
}

export const deletePatient =(patientid)=>{
  return(dispatch)=>{
    dispatch({type: "DELETE_PATIENT_PENDING"});
    axios
    .delete(`http://localhost:5000/Patient/delete-patient/${patientid}`)
    .then((res)=>{
      console.log(res);
      dispatch({type: "DELETE_PATIENT_SUCCESS", payload: res.data.data});
    })
    .catch((err)=>{
      console.log(err);
      dispatch({type: "DELETE_PATIENT_FAILED", payload: err.message});
    })
  }

}