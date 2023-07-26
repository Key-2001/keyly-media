const postReducer = (
  
    state = {
      posts: [],
      isLoading: false,
      error: false,
      uploading: false,
    },
  
  action
) => {
  switch (action.type) {
    case "UPLOAD_START":
      return { ...state, uploading: true, error: false };
    case "UPLOAD_SUCCESS":
      return {
        ...state,
        posts: [action.data, ...state.posts],
        error: false,
        uploading: false,
      };
    case "UPLOAD_FAIL":
      return { ...state, uploading: false, error: true };
    case "RETRIEVING_START":
      return { ...state, isLoading: true, error: false };
    case "RETRIEVING_SUCCESS":
      return { ...state, posts: action.data, isLoading: false, error: false };
    case "RETRIEVING_FAIL":
      return { ...state, isLoading: false, error: true };
    default:
      return state;
  }
};

export default postReducer;
