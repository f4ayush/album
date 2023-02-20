import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

export default (albums = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...albums, action.payload];
    case UPDATE:
      return albums.map((album) => (album.id === action.payload.id ? action.payload : album));
    case DELETE:
      return albums.filter((album) => album.id !== action.payload);
    default:
      return albums;
  }
};