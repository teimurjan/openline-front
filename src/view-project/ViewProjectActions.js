import {get} from "../utils/api";

export const GET_PROJECT = 'VIEW_PROJECT/GET_PROJECT';
export const GET_PROJECT_SUCCESS = 'VIEW_PROJECT/GET_PROJECT_SUCCESS';
export const GET_PROJECT_FAILURE = 'VIEW_PROJECT/GET_PROJECT_FAILURE';

export function getProject(id) {
  return (dispatch) => {
    dispatch({type: GET_PROJECT});
    return get(`/projects/${id}`)
      .then((project) => dispatch({type: GET_PROJECT_SUCCESS, payload: {project}}))
      .catch((errors => dispatch({type: GET_PROJECT_FAILURE, payload: {errors}})));
  }
}
