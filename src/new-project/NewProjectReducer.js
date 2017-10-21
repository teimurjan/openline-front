import createReducer from '../utils/createReducer';
import {Map} from 'immutable';

const initialState = Map({
  isLoading: false,
  errors: {}
});

export default createReducer({
}, initialState);