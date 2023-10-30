const initialState={
  patients:[],
  patient:{},
  success: false,
  error: null,
  isLoading: false,
}


const patientReducer = (state = initialState, action)=>{
  switch (action.type){
    case"GET_PATIENT_PENDING":
    return{
      ...state,
      isLoading:true,
    };
    case"GET_PATIENT_SUCCESS":
    return{
      ...state,
      isLoading: false,
      patients: action.payload,
    };
    case"GET_PATIENT_FAILED":
    return{
      ...state,
      isLoading:false,
      error: action.payload,
    };
    case"SINGLE_PATIENT_PENDING":
    return{
      ...state,
      isLoading:true,
    };
    case"SINGLE_PATIENT_SUCCESS":
    return{
      ...state,
      isLoading: false,
      patients: action.payload,
    };
    case"SINGLE_PATIENT_FAILED":
    return{
      ...state,
      isLoading:false,
      error: action.payload,
    };
    case"ADD_PATIENT_PENDING":
    return{
      ...state,
      isLoading:true,
    };
    case"ADD_PATIENT_SUCCESS":
    return{
      ...state,
      isLoading: false,
      patients: action.payload,
    };
    case"ADD_PATIENT_FAILED":
    return{
      ...state,
      isLoading:false,
      error: action.payload,
    };
    case"UPDATE_PATIENT_PENDING":
    return{
      ...state,
      isLoading:true,
    };
    case"UPDATE_PATIENT_SUCCESS":
    return{
      ...state,
      isLoading: false,
      patients: action.payload,
    };
    case"UPDATE_PATIENT_FAILED":
    return{
      ...state,
      isLoading:false,
      error: action.payload,
    };
    case"DELETE_PATIENT_PENDING":
    return{
      ...state,
      isLoading:true,
    };
    case"DELETE_PATIENT_SUCCESS":
    return{
      ...state,
      isLoading: false,
      patients: action.payload,
    };
    case"DELETE_PATIENT_FAILED":
    return{
      ...state,
      isLoading:false,
      error: action.payload,
    };
    default:
      return state;
  }
}

export default patientReducer