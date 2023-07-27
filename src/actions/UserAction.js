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