const initialState={
  medicalrecords:[],
  medicalrecord:{},
  success: false,
  error: null,
  isLoading: false,
}


const medicalrecordReducer = (state = initialState, action)=>{
  switch (action.type){
    case"GET_MEDICALRECORD_PENDING":
    return{
      ...state,
      isLoading:true,
    };
    case"GET_MEDICALRECORD_SUCCESS":
    return{
      ...state,
      isLoading: false,
      medicalrecords: action.payload,
    };
    case"GET_MEDICALRECORD_FAILED":
    return{
      ...state,
      isLoading:false,
      error: action.payload,
    };
    case"SINGLE_MEDICALRECORD_PENDING":
    return{
      ...state,
      isLoading:true,
    };
    case"SINGLE_MEDICALRECORD_SUCCESS":
    return{
      ...state,
      isLoading: false,
      medicalrecords: action.payload,
    };
    case"SINGLE_MEDICALRECORD_FAILED":
    return{
      ...state,
      isLoading:false,
      error: action.payload,
    };
    case"ADD_MEDICALRECORD_PENDING":
    return{
      ...state,
      isLoading:true,
    };
    case"ADD_MEDICALRECORD_SUCCESS":
    return{
      ...state,
      isLoading: false,
      medicalrecords: action.payload,
    };
    case"ADD_MEDICALRECORD_FAILED":
    return{
      ...state,
      isLoading:false,
      error: action.payload,
    };
    case"UPDATE_MEDICALRECORD_PENDING":
    return{
      ...state,
      isLoading:true,
    };
    case"UPDATE_MEDICALRECORD_SUCCESS":
    return{
      ...state,
      isLoading: false,
      medicalrecords: action.payload,
    };
    case"UPDATE_MEDICALRECORD_FAILED":
    return{
      ...state,
      isLoading:false,
      error: action.payload,
    };
    case"DELETE_MEDICALRECORD_PENDING":
    return{
      ...state,
      isLoading:true,
    };
    case"DELETE_MEDICALRECORD_SUCCESS":
    return{
      ...state,
      isLoading: false,
      medicalrecords: action.payload,
    };
    case"DELETE_MEDICALRECORD_FAILED":
    return{
      ...state,
      isLoading:false,
      error: action.payload,
    };
    default:
      return state;
  }
}

export default medicalrecordReducer