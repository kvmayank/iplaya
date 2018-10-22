import { Reducer } from 'redux'
import * as types from '../actions/actionTypes';  
import { ILayoutState, SearchDomain } from '../store/layout/layoutState';

const initialState: ILayoutState = {
  searchDomain: SearchDomain.camps,
  searchQuery: '',
  sidebarOpen: false,
}

const reducer: Reducer<ILayoutState> = (state = initialState, action) => {
  switch(action.type) {
    case types.LAYOUT_SIDEBAR_TOGGLE:
      return { ...state, sidebarOpen: !state.sidebarOpen };
    case types.SEARCH_QUERY_CHANGE:
      return { ...state, searchQuery: action.query.toLowerCase()};
    case types.SEARCH_DOMAIN_CHANGE:
    return { ...state, searchDomain: action.domain};
    default: 
      return state;
  }
}

export { reducer as layoutReducer }
