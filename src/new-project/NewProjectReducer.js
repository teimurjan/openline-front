import createReducer from '../utils/createReducer';
import {Map} from 'immutable';
import {CHANGE_TAB
} from "./NewProjectActions";

const initialState = Map({
  isLoading: false,
  chosenTabIndex: 0,
  errors: {}
});

export default createReducer({
  [CHANGE_TAB]: (state, action) => state.set('chosenTabIndex', action.payload.index)
}, initialState);