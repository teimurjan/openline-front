import createReducer from '../../utils/createReducer';
import {Map} from 'immutable';
import {
  CHANGE_NAME, CHANGE_TARGET, CHANGE_IMAGE,
  CHANGE_GOAL_SUM,
  CHANGE_DESCRIPTION,
  CHANGE_DEADLINE, SUBMIT, SUBMIT_FAILURE, SUBMIT_SUCCESS, CHANGE_IMAGE_SUCCESS, CHANGE_IMAGE_FAILURE
} from "./CommonInformationActions";

const initialState = Map({
  name: '',
  target: '',
  image: null,
  goalSum: 0,
  description: '',
  deadline: null,
  isLoading: false,
  errors: {
    name: null,
    target: null,
    image: null,
    goalSum: null,
    description: null,
    deadline: null,
  }
});

export default createReducer({
  [CHANGE_NAME]: (state, action) => state.set('name', action.payload.name),
  [CHANGE_TARGET]: (state, action) => state.set('target', action.payload.target),
  [CHANGE_IMAGE]: (state, action) => state.set('isLoading', true),
  [CHANGE_IMAGE_SUCCESS]: (state, action) => state.merge({
    image: action.payload.image,
    isLoading: false
  }),
  [CHANGE_IMAGE_FAILURE]: (state, action) => state.merge({
    errors: {
      image: action.payload.errors
    },
    isLoading: false
  }),
  [CHANGE_GOAL_SUM]: (state, action) => state.set('goalSum', action.payload.goalSum),
  [CHANGE_DESCRIPTION]: (state, action) => state.set('description', action.payload.description),
  [CHANGE_DEADLINE]: (state, action) => state.set('deadline', action.payload.deadline),
  [SUBMIT]: (state, action) => state.set('isLoading', true),
  [SUBMIT_SUCCESS]: (state, action) => state.set('isLoading', false),
  [SUBMIT_FAILURE]: (state, action) => state.merge({
    isLoading: false,
    errors: action.payload.errors
  })
}, initialState);