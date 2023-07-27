import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:8000' });

API.interceptors.request.use((req) => {
  if(localStorage.getItem('profile')){
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
  }
  return req
})

export const getUser = (userId) => API.get(`/user/${userId}`);
export const updateUser = (userId, formData) => API.patch(`/user/${userId}`, formData)
export const getAllUser = () => API.get('/user');
export const followUser = (id, data) => API.patch(`/user/${id}/follow`, data)
export const unFollowUser = (id, data) => API.patch(`/user/${id}/un-follow`, data)
