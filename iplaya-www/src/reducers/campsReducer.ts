import { Reducer } from 'redux'
import * as types from '../actions/actionTypes';  
import { ICampsState } from '../store/camps/campsState';

const initialState: ICampsState = {
    camps: []
}

const reducer: Reducer<ICampsState> = (state = initialState, action) => {
  switch(action.type) {
    case types.LOAD_CAMPS_SUCCESS:
        return { ...state, camps: action.camps }
    case types.LOAD_CAMPS_BEGIN:
    default:
      return state;
  }
}

export { reducer as campsReducer }
