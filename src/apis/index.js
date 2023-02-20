import axios from 'axios';

const API = axios.create({ baseURL: 'https://jsonplaceholder.typicode.com/' });

export const fetchAlbums = () => API.get('/albums');
export const createAlbum = (newAlbum) => API.post('/album', newAlbum);
export const updateAlbum = (id, updatedAlbum) => API.patch(`/albums/${id}`, updatedAlbum);
export const deleteAlbum = (id) => API.delete(`/albums/${id}`);