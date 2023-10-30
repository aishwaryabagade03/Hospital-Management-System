const initialState={
  appointments:[],
  appointment:{},
  success: false,
  error: null,
  isLoading: false,
}


const appointmentReducer = (state = initialState, action)=>{
  switch (action.type){
    case"GET_APPOINTMENT_PENDING":
    return{
      ...state,
      isLoading:true,
    };
    case"GET_APPOINTMENT_SUCCESS":
    return{
      ...state,
      isLoading: false,
      appointments: action.payload,
    };
    case"GET_APPOINTMENT_FAILED":
    return{
      ...state,
      isLoading:false,
      error: action.payload,
    };
    case"SINGLE_APPOINTMENT_PENDING":
    return{
      ...state,
      isLoading:true,
    };
    case"SINGLE_APPOINTMENT_SUCCESS":
    return{
      ...state,
      isLoading: false,
      appointments: action.payload,
    };
    case"SINGLE_APPOINTMENT_FAILED":
    return{
      ...state,
      isLoading:false,
      error: action.payload,
    };
    case"ADD_APPOINTMENT_PENDING":
    return{
      ...state,
      isLoading:true,
    };
    case"ADD_APPOINTMENT_SUCCESS":
    return{
      ...state,
      isLoading: false,
      appointments: action.payload,
    };
    case"ADD_APPOINTMENT_FAILED":
    return{
      ...state,
      isLoading:false,
      error: action.payload,
    };
    case"UPDATE_APPOINTMENT_PENDING":
    return{
      ...state,
      isLoading:true,
    };
    case"UPDATE_APPOINTMENT_SUCCESS":
    return{
      ...state,
      isLoading: false,
      appointments: action.payload,
    };
    case"UPDATE_APPOINTMENT_FAILED":
    return{
      ...state,
      isLoading:false,
      error: action.payload,
    };
    case"DELETE_APPOINTMENT_PENDING":
    return{
      ...state,
      isLoading:true,
    };
    case"DELETE_APPOINTMENT_SUCCESS":
    return{
      ...state,
      isLoading: false,
      appointments: action.payload,
    };
    case"DELETE_APPOINTMENT_FAILED":
    return{
      ...state,
      isLoading:false,
      error: action.payload,
    };
    default:
      return state;
  }
}

export default appointmentReducer