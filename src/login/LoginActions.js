import {post} from "../utils/api";

export const CHANGE_NAME = 'LOGIN/CHANGE_PAGE';
export const CHANGE_PASSWORD = 'LOGIN/CHANGE_PASSWORD';
export const SUBMIT = 'LOGIN/SUBMIT';
export const SUBMIT_SUCCESS = 'LOGIN/SUBMIT_SUCCESS';
export const SUBMIT_FAILURE = 'LOGIN/SUBMIT_FAILURE';

export function changeName(name) {
  return {type: CHANGE_NAME, payload: {name}};
}

export function changePassword(password) {
  return {type: CHANGE_PASSWORD, payload: {password}};
}

export function submit() {
  return (dispatch, getState) => {
    const {name, password} = getState().registration.toJS();
    dispatch({type: SUBMIT});
    return post('/login', {name, password})
      .then(response => {
        dispatch({type: SUBMIT_SUCCESS});
        localStorage.setItem('token', response.token);
      })
      .catch(errors => dispatch({type: SUBMIT_FAILURE, payload: {errors}}))
  };
}