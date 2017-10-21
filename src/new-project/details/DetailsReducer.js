import createReducer from '../../utils/createReducer';
import {Map} from 'immutable';
import {ADD_BLOCK, CHANGE_BLOCK, FETCH_IMAGE, FETCH_IMAGE_FAILURE, FETCH_IMAGE_SUCCESS} from "./DetailsActions";
import {List} from 'immutable';

const initialState = Map({
  blocks: List(),
  isLoading: false,
  errors: {}
});

export default createReducer({
  [ADD_BLOCK]: (state, action) => state.merge({
    blocks: state.get('blocks')
      .push({type: action.payload.type, value: null})
  }),
  [CHANGE_BLOCK]: (state, action) => {
    const type = state.get('blocks').get(action.payload.position).type;
    return state.merge({
      blocks: state.get('blocks')
        .set(action.payload.position, {type, value: action.payload.value})
    })
  },
  [FETCH_IMAGE]: (state, action) => state.set('isLoading', true),
  [FETCH_IMAGE_SUCCESS]: (state, action) => state.set('isLoading', false),
  [FETCH_IMAGE_FAILURE]: (state, action) => state.merge({
    errors: action.payload.errors,
    isLoading: false
  })
  // [SUBMIT]: (state, action) => state.set('isLoading', true),
  // [SUBMIT_SUCCESS]: (state, action) => state.set('isLoading', false),
  // [SUBMIT_FAILURE]: (state, action) => state.merge({
  //   isLoading: false,
  //   errors: action.payload.errors
  // })
}, initialState);