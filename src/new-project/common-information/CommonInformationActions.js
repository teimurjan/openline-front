import {getImageUrl, post} from "../../utils/api";
import {push} from 'react-router-redux';

export const CHANGE_NAME = 'NEW_PROJECT/CHANGE_NAME';
export const CHANGE_TARGET = 'NEW_PROJECT/CHANGE_TARGET';
export const CHANGE_GOAL_SUM = 'NEW_PROJECT/CHANGE_GOAL_SUM';
export const CHANGE_DESCRIPTION = 'NEW_PROJECT/CHANGE_DESCRIPTION';
export const CHANGE_DEADLINE = 'NEW_PROJECT/CHANGE_DEADLINE';
export const SUBMIT = 'NEW_PROJECT/SUBMIT';
export const SUBMIT_SUCCESS = 'NEW_PROJECT/SUBMIT_SUCCESS';
export const SUBMIT_FAILURE = 'NEW_PROJECT/SUBMIT_FAILURE';
export const CHANGE_IMAGE = 'NEW_PROJECT/CHANGE_IMAGE';
export const CHANGE_IMAGE_SUCCESS = 'NEW_PROJECT/CHANGE_IMAGE_SUCCESS';
export const CHANGE_IMAGE_FAILURE = 'NEW_PROJECT/CHANGE_IMAGE_FAILURE';

export function changeName(name) {
  return {type: CHANGE_NAME, payload: {name}};
}

export function changeTarget(target) {
  return {type: CHANGE_TARGET, payload: {target}};
}

export function changeImage(image) {
  return (dispatch, getState) => {
    const token = localStorage.getItem('token');
    dispatch({type: CHANGE_IMAGE});
    getImageUrl({image: image.base64}, token)
      .then(response => dispatch({
        type: CHANGE_IMAGE_SUCCESS,
        payload: {image: {name: image.name, url: response.url}}
      })).catch(errors => dispatch({type: CHANGE_IMAGE_FAILURE, payload: {errors}}))

  }
}

export function changeGoalSum(goalSum) {
  return {type: CHANGE_GOAL_SUM, payload: {goalSum}}
}

export function changeDescription(description) {
  return {type: CHANGE_DESCRIPTION, payload: {description}}
}

export function changeDeadline(deadline) {
  return {type: CHANGE_DEADLINE, payload: {deadline}}
}

export function submit() {
  return (dispatch, getState) => {
    const {name, target, image: {url}, goalSum, description, deadline} = getState().commonInformation.toJS();
    const data = {name, target, image: url, goalSum, description, deadline};
    const token = localStorage.getItem('token');
    dispatch({type: SUBMIT});
    return post('/projects', data, token)
      .then(response => {
        dispatch({type: SUBMIT_SUCCESS});
        dispatch(push(response.id))
      }).catch(errors => dispatch({type: SUBMIT_FAILURE, payload: {errors}}))
  };
}
