import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:8000' });

export const getUser = (userId) => API.get(`/user/${userId}`);
export const updateUser = (userId, formData) => API.patch(`/user/${userId}`, formData)