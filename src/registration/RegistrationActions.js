import {post} from "../utils/api";

export const CHANGE_NAME = 'REGISTRATION/CHANGE_PAGE';
export const CHANGE_PASSWORD = 'REGISTRATION/CHANGE_PASSWORD';
export const SUBMIT = 'REGISTRATION/SUBMIT';
export const SUBMIT_SUCCESS = 'REGISTRATION/SUBMIT_SUCCESS';
export const SUBMIT_FAILURE = 'REGISTRATION/SUBMIT_FAILURE';

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
    return post('/register', {name, password})
      .then(response => {
        dispatch({type: SUBMIT_SUCCESS});
        localStorage.setItem('token', response.token);
      })
      .catch(errors => dispatch({type: SUBMIT_FAILURE, payload: {errors}}))
  };
}