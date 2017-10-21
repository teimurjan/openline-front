import {getImageUrl} from "../../utils/api";

export const ADD_BLOCK = 'DETAILS/ADD_BLOCK';
export const CHANGE_BLOCK = 'DETAILS/CHANGE_BLOCK';
export const FETCH_IMAGE = 'DETAILS/FETCH_IMAGE';
export const FETCH_IMAGE_SUCCESS = 'DETAILS/FETCH_IMAGE_SUCCESS';
export const FETCH_IMAGE_FAILURE = 'DETAILS/FETCH_IMAGE_FAILURE';

export function addBlock(type) {
  return {type: ADD_BLOCK, payload: {type}};
}

export function changeBlock(position, value) {
  return {type: CHANGE_BLOCK, payload: {position, value}};
}

export function fetchImage(position, image) {
  return (dispatch) => {
    const token = localStorage.getItem('token');
    return getImageUrl({image: image.base64}, token)
      .then(response => {
        dispatch({type: FETCH_IMAGE_SUCCESS});
        dispatch(changeBlock(position, response.url));
      }).catch(errors => dispatch({type: FETCH_IMAGE_FAILURE, payload: {errors}}))
  }
}

