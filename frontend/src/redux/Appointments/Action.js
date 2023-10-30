import axios from "axios";
export const getAppointments =()=>{
  return(dispatch)=>{
    dispatch({type: "GET_APPOINTMENT_PENDING"});
    axios
    .get("http://localhost:5000/Appointment/all-appointments")
    .then((res)=>{
      console.log(res);
      dispatch({type: "GET_APPOINTMENT_SUCCESS", payload: res.data.data});
    })
    .catch((err)=>{
      console.log(err);
      dispatch({type: "GET_APPOINTMENT_FAILED", payload: err.message});
    })
  }
}
export const singleAppointment = (appointmentid, AppointmentData)=>{
  return(dispatch)=>{
    dispatch({type: "SINGLE_APPOINTMENT_PENDING"});
    axios
    .get(`http://localhost:5000/Appointment/get-appointment/${appointmentid}`, AppointmentData)
    .then((res)=>{
      console.log(res);
      dispatch({type: "SINGLE_APPOINTMENT_SUCCESS", payload: res.data.data});
    })
    .catch((err)=>{
      console.log(err);
      dispatch({type: "SINGLE_APPOINTMENT_FAILED", payload: err.message});
    })
  }
}

export const addAppointment = ( AppointmentData) => {
  return (dispatch) => {
    dispatch({type: "ADD_APPOINTMENT_PENDING"});
    return axios.post('http://localhost:5000/Appointment/add-appointment',  AppointmentData)
      .then((response) => {
        dispatch({
          type: "ADD_APPOINTMENT_SUCCESS",
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: "ADD_APPOINTMENT_FAILED",
          payload: error,
        });
        throw error; 
      });
  };
};

export const updateAppointment =(values,appointmentid)=>{
  return(dispatch)=>{
    dispatch({type: "UPDATE_APPOINTMENT_PENDING"});
    axios
    .put(`http://localhost:5000/Appointment/update-appointment/${appointmentid}`, values)
    .then((res)=>{
      console.log(res);
      dispatch({type: "UPDATE_APPOINTMENT_SUCCESS", payload: res.data.data});
    })
    .catch((err)=>{
      console.log(err);
      dispatch({type: "UPDATE_APPOINTMENT_FAILED", payload: err.message});
    })
  }
}

export const deleteAppointment =(appointmentid)=>{
  return(dispatch)=>{
    dispatch({type: "DELETE_APPOINTMENT_PENDING"});
    axios
    .delete(`http://localhost:5000/Appointment/delete-appointment/${appointmentid}`)
    .then((res)=>{
      console.log(res);
      dispatch({type: "DELETE_APPOINTMENT_SUCCESS", payload: res.data.data});
    })
    .catch((err)=>{
      console.log(err);
      dispatch({type: "DELETE_APPOINTMENT_FAILED", payload: err.message});
    })
  }
}