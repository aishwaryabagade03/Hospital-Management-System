const initialState={
  nurses:[],
  nurse:{},
  success: false,
  error: null,
  isLoading: false,
}


const nurseReducer = (state = initialState, action)=>{
  switch (action.type){
    case"GET_NURSE_PENDING":
    return{
      ...state,
      isLoading:true,
    };
    case"GET_NURSE_SUCCESS":
    return{
      ...state,
      isLoading: false,
      nurses: action.payload,
    };
    case"GET_NURSE_FAILED":
    return{
      ...state,
      isLoading:false,
      error: action.payload,
    };
    case"ADD_NURSE_PENDING":
    return{
      ...state,
      isLoading:true,
    };
    case"ADD_NURSE_SUCCESS":
    return{
      ...state,
      isLoading: false,
      nurses: action.payload,
    };
    case"ADD_NURSE_FAILED":
    return{
      ...state,
      isLoading:false,
      error: action.payload,
    };
    case"SINGLE_NURSE_PENDING":
    return{
      ...state,
      isLoading:true,
    };
    case"SINGLE_NURSE_SUCCESS":
    return{
      ...state,
      isLoading: false,
      nurses: action.payload,
    };
    case"SINGLE_NURSE_FAILED":
    return{
      ...state,
      isLoading:false,
      error: action.payload,
    };
    case"UPDATE_NURSE_PENDING":
    return{
      ...state,
      isLoading:true,
    };
    case"UPDATE_NURSE_SUCCESS":
    return{
      ...state,
      isLoading: false,
      nurses: action.payload,
    };
    case"UPDATE_NURSE_FAILED":
    return{
      ...state,
      isLoading:false,
      error: action.payload,
    };
    case"DELETE_NURSE_PENDING":
    return{
      ...state,
      isLoading:true,
    };
    case"DELETE_NURSE_SUCCESS":
    return{
      ...state,
      isLoading: false,
      nurses: action.payload,
    };
    case"DELETE_NURSE_FAILED":
    return{
      ...state,
      isLoading:false,
      error: action.payload,
    };
    default:
      return state;
  }
}

export default nurseReducer