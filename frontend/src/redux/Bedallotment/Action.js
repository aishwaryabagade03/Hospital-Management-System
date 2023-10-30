import axios from "axios";
export const getBedallotment =()=>{
  return(dispatch)=>{
    dispatch({type: "GET_BEDALLOTMENT_PENDING"});
    axios
    .get("http://localhost:5000/BedAllotment/all-bedallotment")
    .then((res)=>{
      console.log(res);
      dispatch({type: "GET_BEDALLOTMENT_SUCCESS", payload: res.data.data});
    })
    .catch((err)=>{
      console.log(err);
      dispatch({type: "GET_BEDALLOTMENT_FAILED", payload: err.message});
    })
  }
}

export const singleBedallotment =(bedallotmentid, BedAllotmentData)=>{
  return(dispatch)=>{
    dispatch({type: "SINGLE_BEDALLOTMENT_PENDING"});
    axios
    .get(`http://localhost:5000/BedAllotment/get-bedallotment/${bedallotmentid}`, BedAllotmentData)
    .then((res)=>{
      console.log(res);
      dispatch({type: "SINGLE_BEDALLOTMENT_SUCCESS", payload: res.data.data});
    })
    .catch((err)=>{
      console.log(err);
      dispatch({type: "SINGLE_BEDALLOTMENT_FAILED", payload: err.message});
    })
  }
}

export const addBedallotment = (BedAllotmentData) => {
  return async (dispatch) => {
    dispatch({ type: "ADD_BEDALLOTMENT_PENDING" });
    try {
      const response = await axios.post( 
        "http://localhost:5000/BedAllotment/add-bedallotment",
        BedAllotmentData
      );
      console.log(response);
      dispatch({ type: "ADD_BEDALLOTMENT_SUCCESS", payload: response.data });
    } catch (error) {
      console.error(error);
      dispatch({ type: "ADD_BEDALLOTMENT_FAILED", payload: error.message });
    }
  };
};

export const updateBedallotment =(values, bedallotmentid)=>{
  return(dispatch)=>{
    dispatch({type: "UPDATE_BEDALLOTMENT_PENDING"});
    axios
    .put(`http://localhost:5000/BedAllotment/update-bedallotment/${bedallotmentid}`, values)
    .then((res)=>{
      console.log(res);
      dispatch({type: "UPDATE_BEDALLOTMENT_SUCCESS", payload: res.data.data});
    })
    .catch((err)=>{
      console.log(err);
      dispatch({type: "UPDATE_BEDALLOTMENT_FAILED", payload: err.message});
    })
  }
}

export const deleteBedallotment =(bedallotmentid)=>{
  return(dispatch)=>{
    dispatch({type: "DELETE_BEDALLOTMENT_PENDING"});
    axios
    .delete(`http://localhost:5000/BedAllotment/delete-bedallotment/${bedallotmentid}`)
    .then((res)=>{
      console.log(res);
      dispatch({type: "DELETE_BEDALLOTMENT_SUCCESS", payload: res.data.data});
    })
    .catch((err)=>{
      console.log(err);
      dispatch({type: "DELETE_BEDALLOTMENT_FAILED", payload: err.message});
    })
  }

}