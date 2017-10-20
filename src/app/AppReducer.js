import createReducer from '../utils/createReducer';
import {Map} from 'immutable';

const initialState = Map({
  version: '1.0.0'
});

export default createReducer({}, initialState);