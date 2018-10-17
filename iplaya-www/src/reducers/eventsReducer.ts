import { Reducer } from 'redux'
import * as types from '../actions/actionTypes';  
import { IEventsState } from '../store/events/eventsState';

const initialState: IEventsState = {
    events: []
}

const reducer: Reducer<IEventsState> = (state = initialState, action) => {
  switch(action.type) {
    case types.LOAD_EVENTS_SUCCESS:
        return { ...state, events: action.events }
    case types.LOAD_EVENTS_BEGIN:
    default:
      return state;
  }
}

export { reducer as eventsReducer }
