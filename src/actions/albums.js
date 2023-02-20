import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';
import * as api from '../apis/index.js';

export const getAlbums = () => async (dispatch) => {
  try {
    const { data } = await api.fetchAlbums();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createAlbum = (album) => async (dispatch) => {
  try {
    const { data } = await api.createAlbum(album);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateAlbum = (id, album) => async (dispatch) => {
  try {
    const { data } = await api.updateAlbum(id, album);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteAlbum = (id) => async (dispatch) => {
    try {
      await api.deleteAlbum(id);
  
      dispatch({ type: DELETE, payload: id });
    } catch (error) {
      console.log(error);
    }
  };