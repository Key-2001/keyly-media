import * as UserApi from '../api/UserRequest'
export const updateUser = (id, formData) => async (dispatch) => {
  dispatch({type: "UPDATING_START"});
  try {
    const response = await UserApi.updateUser(id, formData);
    dispatch({type: "UPDATING_SUCCESS", data: response.data})
  } catch (error) {
    console.log(error);
    dispatch({type: "UPDATING_FAIL"})
  }
}

export const followUser = (id, data) => async (dispatch) => {
  dispatch({type: 'FOLLOW_USER', data: id});
  UserApi.followUser(id, data)
}

export const unFollowUser = (id, data) => async (dispatch) => {
  dispatch({type: "UNFOLLOW_USER", data: id});
  UserApi.unFollowUser(id, data)
}