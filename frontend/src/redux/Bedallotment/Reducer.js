const initialState={
  bedallotments:[],
  bedallotment:{},
  success: false,
  error: null,
  isLoading: false,
}


const bedallotmentReducer = (state = initialState, action)=>{
  switch (action.type){
    case"GET_BEDALLOTMENT_PENDING":
    return{
      ...state,
      isLoading:true,
    };
    case"GET_BEDALLOTMENT_SUCCESS":
    return{
      ...state,
      isLoading: false,
      bedallotments: action.payload,
    };
    case"GET_BEDALLOTMENT_FAILED":
    return{
      ...state,
      isLoading:false,
      error: action.payload,
    };
    case"SINGLE_BEDALLOTMENT_PENDING":
    return{
      ...state,
      isLoading:true,
    };
    case"SINGLE_BEDALLOTMENT_SUCCESS":
    return{
      ...state,
      isLoading: false,
      bedallotments: action.payload,
    };
    case"SINGLE_BEDALLOTMENT_FAILED":
    return{
      ...state,
      isLoading:false,
      error: action.payload,
    };
    case"ADD_BEDALLOTMENT_PENDING":
    return{
      ...state,
      isLoading:true,
    };
    case"ADD_BEDALLOTMENT_SUCCESS":
    return{
      ...state,
      isLoading: false,
      bedallotments: action.payload,
    };
    case"ADD_BEDALLOTMENT_FAILED":
    return{
      ...state,
      isLoading:false,
      error: action.payload,
    };
    case"UPDATE_BEDALLOTMENT_PENDING":
    return{
      ...state,
      isLoading:true,
    };
    case"UPDATE_BEDALLOTMENT_SUCCESS":
    return{
      ...state,
      isLoading: false,
      bedallotments: action.payload,
    };
    case"UPDATE_BEDALLOTMENT_FAILED":
    return{
      ...state,
      isLoading:false,
      error: action.payload,
    };
    case"DELETE_BEDALLOTMENT_PENDING":
    return{
      ...state,
      isLoading:true,
    };
    case"DELETE_BEDALLOTMENT_SUCCESS":
    return{
      ...state,
      isLoading: false,
      bedallotments: action.payload,
    };
    case"DELETE_BEDALLOTMENT_FAILED":
    return{
      ...state,
      isLoading:false,
      error: action.payload,
    };
    default:
      return state;
  }
}

export default bedallotmentReducer