const authReducer = (state = {
  authData: null,
  isLoading: false,
  error: false,
  updateLoading: false
}, action) =>{ 
  switch (action.type) {
    case "AUTH_START":
        return { ...state, isLoading: true, error: false}
    case "AUTH_SUCCESS":
      localStorage.setItem("profile", JSON.stringify({...action?.data}))
      return {...state, authData: action.data, isLoading: false, error: false};
    case "AUTH_FAIL":
      return {...state, isLoading: false, error: true}
    case "UPDATING_START": 
      return {...state, updateLoading: true, error: false}
    case "UPDATING_SUCCESS":
      localStorage.setItem("profile", JSON.stringify({...action?.data}))
      return {...state, authData: action.data, updateLoading: false, error: false}
    case "UPDATING_FAIL":
      return {...state, updateLoading: false, error: false}
    case "LOG_OUT":
      localStorage.clear()
      return {...state, authData: null, isLoading: false, error: false}
    default:
      return state;
  }
}

export default authReducer