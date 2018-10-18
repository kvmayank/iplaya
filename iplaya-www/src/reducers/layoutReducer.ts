import { Reducer } from 'redux'
import * as types from '../actions/actionTypes';  
import { ILayoutState } from '../store/layout/layoutState';

const initialState: ILayoutState = {
  searchQuery: '',
  sidebarOpen: false,
}

const reducer: Reducer<ILayoutState> = (state = initialState, action) => {
  switch(action.type) {
    case types.LAYOUT_SIDEBAR_TOGGLE:
      return { ...state, sidebarOpen: !state.sidebarOpen };
    case types.LAYOUT_SEARCH_QUERY_CHANGE:
      return { ...state, searchQuery: action.query.toLowerCase()};
    default: 
      return state;
  }
}

export { reducer as layoutReducer }
