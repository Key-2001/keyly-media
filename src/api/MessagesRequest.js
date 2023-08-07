import axios from 'axios'


const API = axios.create({ baseURL: 'http://localhost:8000' });

export const getMessages = (id) => API.get(`/messages/${id}`)
export const addMessage = (data) => API.post('/messages/', data)