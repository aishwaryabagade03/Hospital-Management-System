import axios from "axios";
export const getMedicalrecord =(MedicalrecordData)=>{
  return(dispatch)=>{
    dispatch({type: "GET_MEDICALRECORD_PENDING"});
    axios
    .get("http://localhost:5000/Medicalrecord/all-medical-records", MedicalrecordData)
    .then((res)=>{
      console.log(res);
      dispatch({type: "GET_MEDICALRECORD_SUCCESS", payload: res.data.data});
    })
    .catch((err)=>{
      console.log(err);
      dispatch({type: "GET_MEDICALRECORD_FAILED", payload: err.message});
    })
  }
}

export const singleMedicalrecord =(medicalrecordid, MedicalrecordData )=>{
  return(dispatch)=>{
    dispatch({type: "SINGLE_MEDICALRECORD_PENDING"});
    axios
    .get(`http://localhost:5000/Medicalrecord/get-medical-record/${medicalrecordid}`, MedicalrecordData)
    .then((res)=>{
      console.log(res);
      dispatch({type: "SINGLE_MEDICALRECORD_SUCCESS", payload: res.data.data});
    })
    .catch((err)=>{
      console.log(err);
      dispatch({type: "SINGLE_MEDICALRECORD_FAILED", payload: err.message});
    })
  }
}

export const addMedicalrecord = (MedicalrecordData) => {
  return async (dispatch) => {
    dispatch({ type: "ADD_MEDICALRECORD_PENDING" });
    try {
      const response = await axios.post( 
        "http://localhost:5000/Medicalrecord/add-medical-record",
        MedicalrecordData
      );
      console.log(response);
      dispatch({ type: "ADD_MEDICALRECORD_SUCCESS", payload: response.data });
    } catch (error) {
      console.error(error);
      dispatch({ type: "ADD_MEDICALRECORD_FAILED", payload: error.message });
    }
  };
};

export const updateMedicalrecord =(values,medicalrecordid)=>{
  return(dispatch)=>{
    dispatch({type: "UPDATE_MEDICALRECORD_PENDING"});
    axios
    .put(`http://localhost:5000/Medicalrecord/update-medical-record/${medicalrecordid}`, values)
    .then((res)=>{
      console.log(res);
      dispatch({type: "UPDATE_MEDICALRECORD_SUCCESS", payload: res.data.data});
    })
    .catch((err)=>{
      console.log(err);
      dispatch({type: "UPDATE_MEDICALRECORD_FAILED", payload: err.message});
    })
  }
};

export const deleteMedicalrecord =(medicalrecordid)=>{
  return(dispatch)=>{
    dispatch({type: "DELETE_MEDICALRECORD_PENDING"});
    axios
    .delete(`http://localhost:5000/Medicalrecord/delete-medical-record/${medicalrecordid}`)
    .then((res)=>{
      console.log(res);
      dispatch({type: "DELETE_MEDICALRECORD_SUCCESS", payload: res.data.data});
    })
    .catch((err)=>{
      console.log(err);
      dispatch({type: "DELETE_MEDICALRECORD_FAILED", payload: err.message});
    })
  }
}