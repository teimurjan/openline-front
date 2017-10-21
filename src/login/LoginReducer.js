import createReducer from '../utils/createReducer';
import {Map} from 'immutable';
import {CHANGE_NAME, CHANGE_PASSWORD, SUBMIT, SUBMIT_FAILURE, SUBMIT_SUCCESS} from "./LoginActions";

const initialState = Map({
  name: '',
  password: '',
  isLoading: false,
  errors: {}
});

export default createReducer({
  [CHANGE_NAME]: (state, action) => state.set('name', action.payload.name),
  [CHANGE_PASSWORD]: (state, action) => state.set('password', action.payload.password),
  [SUBMIT]: (state, action) => state.set('isLoading', true),
  [SUBMIT_SUCCESS]: (state, action) => state.set('isLoading', false),
  [SUBMIT_FAILURE]: (state, action) => state.merge({
    isLoading: false,
    errors: action.payload.errors
  }),
}, initialState);