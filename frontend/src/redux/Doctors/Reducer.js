const initialState={
  doctors:[],
  doctor:{},
  success: false,
  error: null,
  isLoading: false,
}


const doctorReducer = (state = initialState, action)=>{
  switch (action.type){
    case"GET_DOCTOR_PENDING":
    return{
      ...state,
      isLoading:true,
    };
    case"GET_DOCTOR_SUCCESS":
    return{
      ...state,
      isLoading: false,
      doctors: action.payload,
    };
    case"GET_DOCTOR_FAILED":
    return{
      ...state,
      isLoading:false,
      error: action.payload,
    };
    case"ADD_DOCTOR_PENDING":
    return{
      ...state,
      isLoading:true,
    };
    case"ADD_DOCTOR_SUCCESS":
    return{
      ...state,
      isLoading: false,
      doctors: action.payload,
    };
    case"ADD_DOCTOR_FAILED":
    return{
      ...state,
      isLoading:false,
      error: action.payload,
    };
    case"SINGLE_DOCTOR_PENDING":
    return{
      ...state,
      isLoading:true,
    };
    case"SINGLE_DOCTOR_SUCCESS":
    return{
      ...state,
      isLoading: false,
      doctors: action.payload,
    };
    case"SINGLE_DOCTOR_FAILED":
    return{
      ...state,
      isLoading:false,
      error: action.payload,
    };
    case"UPDATE_DOCTOR_PENDING":
    return{
      ...state,
      isLoading:true,
    };
    case"UPDATE_DOCTOR_SUCCESS":
    return{
      ...state,
      isLoading: false,
      doctors: action.payload,
    };
    case"UPDATE_DOCTOR_FAILED":
    return{
      ...state,
      isLoading:false,
      error: action.payload,
    };
    case"DELETE_DOCTOR_PENDING":
    return{
      ...state,
      isLoading:true,
    };
    case"DELETE_DOCTOR_SUCCESS":
    return{
      ...state,
      isLoading: false,
      doctors: action.payload,
    };
    case"DELETE_DOCTOR_FAILED":
    return{
      ...state,
      isLoading:false,
      error: action.payload,
    };
    default:
      return state;
  }
}

export default doctorReducer