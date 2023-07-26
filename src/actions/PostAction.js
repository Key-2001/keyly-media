import * as PostApi from '../api/PostRequest'

export const getTimelinePosts = (id) =>  async (dispatch) => {
  dispatch({type: "RETRIEVING_START"})
  try {
    const response = await PostApi.getTimelinePosts(id);
    console.log("shjakdn", response);
    dispatch({type: "RETRIEVING_SUCCESS", data: response.data.posts})
  } catch (error) {
    console.log(error);
    dispatch({type: "RETRIEVING_FAIL"})
  }
}