import axios from 'axios'


const API = axios.create({ baseURL: 'http://localhost:8000' });

export const getTimelinePosts = (id) => API.get(`/post/${id}/timeline`)
export const likePost = (id, userId) => API.patch(`/post/${id}/like`, {userId: userId})