import createReducer from '../utils/createReducer';
import {Map} from 'immutable';
import {GET_PROJECT, GET_PROJECT_SUCCESS, GET_PROJECT_FAILURE} from "./ViewProjectActions";

const initialState = Map({
  project: null,
  isLoading: true,
  errors: {}
});

export default createReducer({
  [GET_PROJECT]: (state, action) => state.set('isLoading', true),
  [GET_PROJECT_SUCCESS]: (state, action) => state.merge({
    isLoading: false,
    project: action.payload.project
  }),
  [GET_PROJECT_FAILURE]: (state, action) => state.merge({
    isLoading: false,
    errors: action.payload.errors
  }),
}, initialState);