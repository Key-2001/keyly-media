const authReducer = (state = {
  authData: null,
  isLoading: false,
  error: false
}, action) =>{ 
  switch (action.type) {
    case "AUTH_START":
        return { ...state, isLoading: true, error: false}
    case "AUTH_SUCCESS":
      localStorage.setItem("profile", JSON.stringify({...action?.data}))
      return {...state, authData: action.data, isLoading: false, error: false};
    case "AUTH_FAIL":
      return {...state, isLoading: false, error: true}
    default:
      return state;
  }
}

export default authReducer