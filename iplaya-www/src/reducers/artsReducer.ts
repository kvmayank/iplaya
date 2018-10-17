import { Reducer } from 'redux'
import * as types from '../actions/actionTypes';  
import { IArtsState } from '../store/arts/artsState';

const initialState: IArtsState = {
    arts: []
}

const reducer: Reducer<IArtsState> = (state = initialState, action) => {
  switch(action.type) {
    case types.LOAD_ARTS_SUCCESS:
        return { ...state, arts: action.arts }
    case types.LOAD_ARTS_BEGIN:
    default:
      return state;
  }
}

export { reducer as artsReducer }
