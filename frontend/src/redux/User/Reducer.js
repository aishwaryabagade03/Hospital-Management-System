const initialState={
  users:[],
  user:{},
  success: false,
  error: null,
  isLoading: false,
}


const userReducer = (state = initialState, action)=>{
  switch (action.type){
    case"SINGLE_USER_PENDING":
    return{
      ...state,
      isLoading:true,
    };
    case"SINGLE_USER_SUCCESS":
    return{
      ...state,
      isLoading: false,
      users: action.payload,
    };
    case"SINGLE_USER_FAILED":
    return{
      ...state,
      isLoading:false,
      error: action.payload,
    };
    default:
      return state;
  }
}

export default userReducer